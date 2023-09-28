import { Column } from "typeorm"

export class SituacaoFuncionamento {
    @Column({ name:'id_situacao_funcionamento' })
    id: number

    @Column({ name:'ds_situacao_funcionamento' })
    nome: string
}