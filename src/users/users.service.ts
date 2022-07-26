import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
  ) {}
  async register(createUserDto: CreateUserDTO) {
    try {
      const { firstName, lastName } = createUserDto;
      const user: User = await this.userRepositry.create({
        firstName,
        lastName,
      });
      console.log(user);
      const result = await this.userRepositry.save(user);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
