import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
<<<<<<< HEAD
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';
import { Prisma, User } from '@prisma/client';
=======
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.UserCreateInput, role: UserRole): Promise<User> {
<<<<<<< HEAD
    const userExists = await this.db.user.findFirst({
      where: { OR: [{ username: data.username }, { email: data.email }] },
    });

    if (userExists) {
      throw new ConflictException('Email ou username em uso');
    }

    const salt = 10;
    const hashPass = await bcrypt.hash(data.password, salt);
=======
    const userExists = await this.db.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new ConflictException('Email já está cadastrado');
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(data.password, salt);
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a

    const user = await this.db.user.create({
      data: {
        ...data,
        role: role,
<<<<<<< HEAD
        password: hashPass,
=======
        password: hashedPassword,
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
      },
    });

    delete user.password;
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });
<<<<<<< HEAD
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
=======

    if (!user) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    delete user.password;
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
    return user;
  }

  async findMany() {
    const user = await this.db.user.findMany();
<<<<<<< HEAD
    const userView = user.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ password, id, role, status, createdAt, updatedAt, ...res }) => res,
    );
    return userView;
  }

  async findAll() {
    return this.db.user.findMany({});
=======
    const newUser = user.map(({ password, ...resto }) => resto);
    return newUser;
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.user.delete({
      where: { id },
    });

    return {
<<<<<<< HEAD
      message: 'Deletado com sucesso',
=======
      message: 'Item deletado com sucesso',
>>>>>>> 80edcedc6dc2a4d3733d43c6664597a9b9d23e9a
    };
  }
}
