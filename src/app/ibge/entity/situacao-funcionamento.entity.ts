import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({schema: 'apl_nestjs', name: 'tb_situacao_funcionamento'})
export class SituacaoFuncionamento extends BaseEntity {
    @PrimaryColumn({name: 'id_situacao_funcionamento'})
    id: number;

    @Column({ name:"ds_nome" })
    nome: string;

    @Column({ name:"bl_ativo" })
    ativo: boolean;
}