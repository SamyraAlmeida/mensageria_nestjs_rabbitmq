import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  @MessagePattern({cmd: 'greeting'})  
  getGreetingMessage(name: string): string {
    console.log(`Hello ${name}`);
    return `Hello ${name}`;
  }

  @MessagePattern({cmd: 'greeting-async'})  
  async getGreetingMessageAsync(name: string): Promise<string> {
    console.log(`Hello ${name} Async`);
    return `Hello ${name} Async`;
  }

  @EventPattern('initialized-routine')
  async handleInitializedRoutineEvent(data: Record<string, unknown>){
    console.log(data);
  }
}
