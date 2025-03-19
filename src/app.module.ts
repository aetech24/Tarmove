import { AuthModule } from './auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [AuthModule, UsersModule, PrismaModule],
  controllers: [AuthController, AppController],
  providers: [AuthService, AppService, PrismaService],
})
export class AppModule {}
