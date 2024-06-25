import { Controller, Get } from '@nestjs/common';

@Controller('menu')
export class MenuController {
  @Get()
  findAll() {
    return [
      {
        role: 'admin',
        menu: 'itinerarios',
      },
      {
        role: 'admin',
        menu: 'associate',
      },
      {
        role: 'admin',
        menu: 'customer',
      },
    ];
  }
}
