import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ProductsController } from 'products/products.controller';
import { ProductsService } from 'products/products.service';
import { CategoriesModule } from 'categories/categories.module';

import { Product } from 'products/models/products.model';
import { ProductsCategories } from 'products/models/products-categories.model';
import { Category } from 'categories/models/categories.model';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
  imports: [
    SequelizeModule.forFeature([Product, Category, ProductsCategories]),
    CategoriesModule,
  ],
})
export class ProductsModule {}
