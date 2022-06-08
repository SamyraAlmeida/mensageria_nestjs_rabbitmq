import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Routine } from './routine';

@Injectable()
export class AppService {
  
  constructor(
    @Inject('GREETING_SERVICE') private client: ClientProxy
  ){}

  async getHello(name: string) {
    return this.client.send({cmd: 'greeting'}, name);
  }

  async getHelloAsync(name: string) {
    const message = await this.client.send({cmd: 'greeting-async'}, name);
    return message;
  }

  async publishEvent(data: Routine) {
    this.client.emit('initialized-routine', data);
  }
}
