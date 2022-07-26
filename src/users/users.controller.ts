import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  public async register(@Body() createUserDto: CreateUserDTO) {
    await this.usersService.register(createUserDto);
  }
}
