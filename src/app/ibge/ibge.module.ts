import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cidade } from './entity/cidade.entity';
import { CidadeService } from './service/cidade.service';
import { CidadeRepository } from './repository/cidade.repository';
import { CidadeController } from './webservice/cidade.controller';
import { Escola } from './entity/escola.entity';
import { SituacaoFuncionamento } from './entity/situacao-funcionamento.entity';
import { EscolaService } from './service/escola.service';
import { EscolaRepository } from './repository/escola.repository';
import { EscolaControllerV1 } from './webservice/escola.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade, Escola, SituacaoFuncionamento])],
  providers: [CidadeService, CidadeRepository,
  EscolaService, EscolaRepository],
  controllers: [CidadeController, EscolaControllerV1],
  exports: [CidadeService,EscolaService],
})
export class IbgeModule {}
