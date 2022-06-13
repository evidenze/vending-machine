import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ProductService } from '../product.service';

@Injectable()
export class ProductSeed {
  constructor(private readonly service: ProductService) {}

  @Command({
    command: 'seed:product',
    describe: 'seed product',
    autoExit: true,
  })
  async create() {
    const products = await this.service.createMany([
      {
        name: 'Popcorn',
        price: 20,
        image:
          'https://image.com/image.png',
        stock: 10,
      },
      {
        name: 'Lolipop',
        price: 25,
        image:
          'https://image.com/image.png',
        stock: 10,
      },
      {
        name: 'Ice Scream',
        price: 30,
        image:
          'https://image.com/image.png',
        stock: 10,
      },
      {
        name: 'Coke',
        price: 30,
        image:
          'https://image.com/image.png',
        stock: 10,
      },
    ]);
    console.log(products);
  }
}
