import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';


@Injectable()
export class EscolaViewRepository extends Repository<Escola> {
  constructor(private dataSource: DataSource) {
    super(Escola, dataSource.createEntityManager());
  }
}
