import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'demo_graphql',
  entities: ['dist/models/**/*.entity{.ts,.js}'],
  migrations: ['dist/shared/database/migrations/*{.ts,.js}'],
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceConfig);
