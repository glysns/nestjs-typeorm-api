import { Injectable } from '@nestjs/common';
import { EscolaRepository } from '../repository/escola.repository';
import { Escola } from '../entity/escola.entity';
import { EscolaDto } from '../dto/escola.dto';
import { SituacaoFuncionamento } from '../entity/situacao-funcionamento.entity';

@Injectable()
export class EscolaService {
  constructor(private readonly repository: EscolaRepository) {}

  async save (dto: EscolaDto) {
    
    const entity = this.toEntity(dto);
    await this.repository.save(entity)
  }

  async update(id: number, dto: EscolaDto) {
    const entity = this.toEntity(dto);
    this.repository.update(id, entity);
    return id; 
}
  async findOne(id: number): Promise<Escola> {
    return this.repository.findOneBy({ id: id });
  }

  async findAll(): Promise<Escola[]> {
    return await this.repository.find();
  }
  toEntity(dto :EscolaDto ) : Escola {
    const entity =  new Escola();

    const {grupoEntidade, numeroCodigoIneo, situacaoFuncionamento, nome, numeroCodigoIbge, distrito, cnpj, cep, logradouro, numero, complemento, bairro, 
      ddd, fone, fone2, email, latitude, longitude, gre, tipoZona, localizacaoDiferenciada, esferaAdm, entidadeVinculada, situacaoRegulamentacao, tipoEducacao, escolaVinculada
    } = dto;

    entity.numero = numero;
    entity.complemento=complemento;
    entity.bairro = bairro;
    entity.ddd = ddd;
    entity.fone = fone;
    entity.fone2=fone2;
    entity.email = email;
    entity.latitude = latitude;
    entity.longitude = longitude;
    entity.tipoZona = tipoZona;
    entity.localizacaoDiferenciada = localizacaoDiferenciada;
    entity.esferaAdm = esferaAdm;
    entity.entidadeVinculada = entidadeVinculada;
    entity.situacaoRegulamentacao=situacaoRegulamentacao;
    entity.tipoEducacao = tipoEducacao;
    entity.escolaVinculada=escolaVinculada;
    entity.gre=gre;
    entity.cnpj = cnpj;
    entity.cep=cep;
    entity.logradouro=logradouro;
    entity.grupoEntidade = grupoEntidade;
    entity.numeroCodigoIneo = numeroCodigoIneo;
    entity.nome = nome;
    entity.numeroCodigoIbge = numeroCodigoIbge;
    entity.distrito = distrito;
    
    const situacao =  new SituacaoFuncionamento();
    situacao.id = situacaoFuncionamento;
    entity.situacaoFuncionamento = situacao;
    return entity;
  }
}
