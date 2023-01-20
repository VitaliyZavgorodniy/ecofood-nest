import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

import { Product } from './products/models/products.model';
import { Category } from 'categories/models/categories.model';
import { ProductsCategories } from 'products/models/products-categories.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Product, Category, ProductsCategories],
      autoLoadModels: true,
    }),
    ProductsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
