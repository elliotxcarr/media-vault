import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

  @Get('movies')
  getMovies() {
    // const data = this.appService.getData()
    // console.log('in getMovies')
    return {titles: [{originalTitle: 'hello'}]};
  }
}
