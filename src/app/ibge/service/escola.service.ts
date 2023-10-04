import { Injectable } from '@nestjs/common';
import { EscolaRepository } from '../repository/escola.repository';
import { Escola } from '../entity/escola.entity';
import { EscolaDto } from '../dto/escola.dto';

@Injectable()
export class EscolaService {
  constructor(private readonly repository: EscolaRepository) {}

  async save (dto: EscolaDto): Promise<Escola> {
    
    const entity = this.repository.create({
      ...dto
    });
    return await this.repository.save(entity);
  }

  async update(id: number, dto: EscolaDto) {
    this.repository.update(id, dto);
    return id; 
}
  async findOne(id: number): Promise<Escola> {
    return this.repository.findOneBy({ id: id });
  }

  async findAll(): Promise<Escola[]> {
    return await this.repository.find();
  }
}
