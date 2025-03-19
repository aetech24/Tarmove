import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUserWithEmail(payload: AuthDto) {
    //check if user already exists
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });

    //if user already exists, throw an error
    if (user) {
      throw new ConflictException('User already exists');
    }
    //hash user password
    const hashedPassword = await argon2.hash(payload.password);

    //create user
    const newUser = await this.prisma.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
        phone: payload.phone,
        name: payload.name,
      },
    });

    return {
      data: newUser,
      message: 'User created successfully',
    };
  }

  async loginUserWithEmail(payload: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await argon2.verify(
      user.password,
      payload.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      data: user,
      message: 'User logged in successfully',
    };
  }
}
