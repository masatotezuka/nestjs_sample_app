import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sendData(data: { text: string }): string {
    return `PostedData is ${data.text}`;
  }
}
