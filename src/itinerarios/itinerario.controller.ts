import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ItinerarioService } from './itinerario.service';

@Controller('itinerarios')
export class ItinerariosController {
  constructor(private itinerariosService: ItinerarioService) {}

  @Get()
  findAll() {
    return this.itinerariosService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.itinerariosService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    return this.itinerariosService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.itinerariosService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itinerariosService.remove(id);
  }
}
