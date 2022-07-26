import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  create(@Body() data: { text: string; phone: number }): string {
    console.log(typeof data.phone);

    return this.appService.sendData(data);
  }
}
