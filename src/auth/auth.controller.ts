import { Controller, Post, Body } from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUserWithEmail(@Body() payload: AuthDto) {
    const result = await this.authService.registerUserWithEmail(payload);
    return {
      data: result.data,
      message: result.message,
    };
  }

  //login user with email
  @Post('login')
  async loginUserWithEmail(@Body() payload: AuthDto) {
    const result = await this.authService.loginUserWithEmail(payload);
    return {
      data: result.data,
      message: result.message,
    };
  }
}
