import { DataTable } from "@/components/dataTable"
import { Button } from "@/components/ui/button"
import { columns } from "@/components/coordenador/dataTable/columns"
import { GetCoordenadores} from "@/lib/data"
import { Coordenadores, Usuario } from "@/lib/definitions"
import Link from "next/link"

export default async function Page() {

    const coordenador = await GetCoordenadores() as Coordenadores[]
    
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold mb-4">Coordenadores</h1>
            <Link href={'/coordenador/adicionar'} className="text-white hover:text-gray-300">
                <Button>Adicionar coordenador</Button>
            </Link>
            </div>
            <DataTable columns={columns} data={coordenador} />
        </main>
    )
}