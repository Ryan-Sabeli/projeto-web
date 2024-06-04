'use client'
import { useUser } from "@/context/user-context";
import LogOutButton from "@/icons/logout";
import logout from "@/lib/actions/logout";
import Link from "next/link";

export default function Header() {
    const { user, setUser } = useUser();
    
    async function handleLogout() {
        await logout();
        setUser(null);
    }

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
            <ul className="flex gap-6">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                {user?.is_adm && (
                    <>
                        <li>
                            <Link href="/usuarios" className="text-white hover:text-gray-300">Usuários</Link>
                        </li>
                        <li>
                            <Link href="/coordenador" className="text-white hover:text-gray-300">Coordenadores</Link>
                        </li>
                    </>
                )}
                <li>
                    <Link href="/voto" className="text-white hover:text-gray-300">Votos</Link>
                </li>
            </ul>

            <button onClick={handleLogout} className="text-white hover:text-gray-300">
                <LogOutButton />
                Sair
            </button>
        </nav>
    );
}
