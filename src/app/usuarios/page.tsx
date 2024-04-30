import { DataTable } from "@/components/dataTable"
import { Button } from "@/components/ui/button"
import { columns } from "@/components/usuarios/dataTable/columns"
import { GetUsuarios} from "@/lib/data"
import { Usuario } from "@/lib/definitions"
import Link from "next/link"

export default async function Page() {

    const usuario = await GetUsuarios() as Usuario[]
    
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold mb-4">Usuários</h1>
            <Link href={'/usuarios/adicionar'} className="text-white hover:text-gray-300">
                <Button>Adicionar usuário</Button>
            </Link>
            </div>
            <DataTable columns={columns} data={usuario} />
        </main>
    )
}