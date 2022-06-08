import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Routine } from './routine';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/greeting")
  async getHello(@Query() query?: { name: string }) {
    return this.appService.getHello(query.name);
  }

  @Get('/greeting-async')
  async getHelloAsync(@Query() query?: { name: string }) {
    return this.appService.getHelloAsync(query.name);
  }

  @Post('/publish-event')
  async publishEvent(@Body() data: Routine) {
    return this.appService.publishEvent(data);
  }
}
