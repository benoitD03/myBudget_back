import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from './aut.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseInterceptors(FileInterceptor('file'))
  signIn(@Body() signInDto) {
    return this.authService.signIn(signInDto.Email, signInDto.Password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(@Body() signUpDto) {
    return this.authService.signUp(signUpDto.Email, signUpDto.Password, signUpDto.Prenom, signUpDto.Nom);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
