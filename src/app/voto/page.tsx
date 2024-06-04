import { DataTable } from "@/components/dataTable"
import { Button } from "@/components/ui/button"
import { columns } from "@/components/voto/dataTable/columns"
import { GetVotos } from "@/lib/data"
import { Voto } from "@/lib/definitions"
import Link from "next/link"

export default async function Page() {

    const voto = await GetVotos() as Voto[]
    
    return (    
        <main className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold mb-4">Votos</h1>
            <Link href={'/voto/adicionar'} className="text-white hover:text-gray-300">
                <Button>Adicionar voto</Button>
            </Link>
            </div>
            <DataTable columns={columns} data={voto} />
        </main>
    )
}   