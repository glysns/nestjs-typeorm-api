import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cidade } from './entity/cidade.entity';
import { CidadeService } from './service/cidade.service';
import { CidadeRepository } from './repository/cidade.repository';
import { CidadeController } from './webservice/cidade.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade])],
  providers: [CidadeService, CidadeRepository],
  controllers: [CidadeController],
  exports: [CidadeService],
})
export class IbgeModule {}
