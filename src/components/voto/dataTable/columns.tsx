"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import {Voto} from '@/lib/definitions'
export const columns: ColumnDef<Voto>[] = [
  {
    accessorKey: "coordenador",
    header: "Coordenador",
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "dataNascimento",
    header: "Idade",
    cell: ({row}) => {
      console.log(row.getValue("dataNascimento"))
      let hoje = new Date();
      let nascimento = new Date(row.getValue("dataNascimento"));
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      let mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return <div>{idade} </div>;

    },
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
]