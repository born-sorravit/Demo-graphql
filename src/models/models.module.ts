import { Global, Module } from '@nestjs/common';
import { UserRepository } from './user/user.repository';

const repositories = [UserRepository];
@Global()
@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class ModelsModule {}
