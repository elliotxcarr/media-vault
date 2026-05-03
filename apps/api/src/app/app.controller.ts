import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('movies')
  async getMovies() {
    const data = this.appService.getData()
    return await data;
  }
}
