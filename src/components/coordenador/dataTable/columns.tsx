"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import {Coordenadores} from '@/lib/definitions'
export const columns: ColumnDef<Coordenadores>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "bairro",
    header: "Bairro",
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]