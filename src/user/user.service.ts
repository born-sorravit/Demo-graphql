import {
  HttpException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from '../models/user/user.repository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    // Repository
    private readonly userRepository: UserRepository,
  ) {}
  create(createUserInput: CreateUserInput) {
    try {
      const user = this.userRepository.create(createUserInput);
      return this.userRepository.save(user);
    } catch (error) {
      this.logger.error('Failed to create user', error);
      throw new HttpException('Internal Server Error', 500);
    }
  }

  findAll() {
    try {
      const users = this.userRepository.find();
      return users;
    } catch (error) {
      this.logger.error('Failed to fetch users', error);
      throw new HttpException('Internal Server Error', 500);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      return user;
    } catch (error) {
      this.logger.error(`Failed to find user with ID ${id}`, error);
      throw new HttpException('Internal Server Error', 500);
    }
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    try {
      const user = this.userRepository.update(id, updateUserInput);
      return user;
    } catch (error) {
      this.logger.error(`Failed to update user with ID ${id}`, error);
      throw new HttpException('Internal Server Error', 500);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
