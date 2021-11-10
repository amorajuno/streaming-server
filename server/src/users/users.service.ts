import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.UserCreateInput, role: UserRole): Promise<User> {
    const userExists = await this.db.user.findFirst({
      where: { OR: [{ username: data.username }, { email: data.email }] },
    });

    if (userExists) {
      throw new ConflictException('Email ou username em uso');
    }

    const salt = 10;
    const hashPass = await bcrypt.hash(data.password, salt);

    const user = await this.db.user.create({
      data: {
        ...data,
        role: role,
        password: hashPass,
      },
    });

    delete user.password;
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('ID não encontrado');
    }

    delete user.password;
    return user;
  }

  async findOneByName(username: string): Promise<User> {
    const user = await this.db.user.findFirst({
      where: { username },
    });
    if (!user) {
      throw new NotFoundException('Username não encontrado');
    }

    delete user.password;
    delete user.email;
    delete user.updatedAt;
    delete user.id;
    return user;
  }

  async findMany() {
    const user = await this.db.user.findMany();
    const userView = user.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ password, id, role, status, createdAt, updatedAt, ...res }) => res,
    );
    return userView;
  }

  async findAll() {
    return this.db.user.findMany({});
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.user.delete({
      where: { id },
    });

    return {
      message: 'Deletado com sucesso',
    };
  }
}
