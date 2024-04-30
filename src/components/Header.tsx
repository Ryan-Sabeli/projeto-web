import { usuarios } from "@/lib/data";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex  gap-6">
                <li><Link href={'/'} className="text-white hover:text-gray-300">Home</Link></li>
                {usuarios[1].logado ? ( <>   
                    <li><Link href={'/usuarios'} className="text-white hover:text-gray-300">Usuários</Link></li>
                    <li><Link href={'/coordenador/'} className="text-white hover:text-gray-300">Coordenadores</Link></li>
                </>)
            :
                null}
                <li><Link href={'/voto'} className="text-white hover:text-gray-300">Votos</Link></li>
            </ul>
        </nav>
    )
}