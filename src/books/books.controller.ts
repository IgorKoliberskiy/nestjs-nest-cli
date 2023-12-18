import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
