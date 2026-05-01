import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // async getData() {
  //   try {
  //     const response = await fetch('https://api.imdbapi.dev/titles');
  //     console.log(response)
  //     if (!response.ok) throw new Error('request failed');
  //     const data = await response.json()
  //     return data.titles;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
}
