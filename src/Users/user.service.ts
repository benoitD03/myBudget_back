import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    public users: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.users.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    const options: FindOneOptions = {
      where: { Email: email },
    };
    const result = await this.users.findOne(options);
    return result;
  }
}
