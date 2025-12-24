import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSource } from '@/shared/database/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource.options)],
})
export class DatabaseModule {}
