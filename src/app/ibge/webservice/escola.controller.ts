import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { EscolaService } from '../service/escola.service';
import { EscolaDto } from '../dto/escola.dto';
import { Escola } from '../entity/escola.entity';

@Controller({
  path: 'escolas',
})
export class EscolaControllerV1 {
  constructor(private readonly service: EscolaService) {}

  @Post()
  async create(@Body() dto: EscolaDto): Promise<EscolaDto> {
    return await this.service.save(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: EscolaDto): Promise<Number> {
    return this.service.update(id, dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) : Promise<Escola> {
    return this.service.findOne(id);
  }

  @Get()
  async findAll(): Promise<Escola[]> {
    return await this.service.findAll();
  }

}
