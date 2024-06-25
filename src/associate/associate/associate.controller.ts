import { Controller, Get } from '@nestjs/common';

@Controller('associate')
export class AssociateController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'Ramesh Kumar',
        email: 'ramesh@in.com',
        phone: '899089898',
        associategroup: 'level1',
        address: 'No 2\nRamraj street, chennai\nIndai',
        type: 'SUPPLIER',
        status: true,
      },
      {
        id: 2,
        name: 'Akbar',
        email: 'akbar@in.com',
        phone: '899089898',
        associategroup: 'level1',
        address: 'No 2\nRamraj street, Delhi\nIndai',
        type: 'SUPPLIER',
        status: true,
      },
      {
        id: 5,
        name: 'Ramesh Kumar',
        email: 'ramesh@inc.com',
        phone: '899089898',
        associategroup: 'level2',
        address: 'No 2\nRamraj street, chennai test\nIndai',
        type: 'SUPPLIER',
        status: true,
      },
      {
        id: 7,
        name: 'Albert Einstien',
        email: 'albert@in.com',
        phone: '78899999',
        associategroup: 'level1',
        address: 'no 1 ,new street',
        type: 'SUPPLIER',
        status: true,
      },
      {
        id: 8,
        name: 'NT user',
        email: 'nt@in.com',
        phone: '7899900',
        associategroup: 'level2',
        address: 'test',
        type: 'SUPPLIER',
        status: true,
      },
      {
        id: 9,
        name: 'Akbar',
        email: 'test@in.com',
        phone: '33333',
        associategroup: 'level1',
        address: 'test',
        type: 'CUSTOMER',
        status: true,
      },
    ];
  }
}
