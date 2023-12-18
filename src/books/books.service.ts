import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }
}
