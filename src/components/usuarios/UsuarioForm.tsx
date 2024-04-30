import { adicionarUsuario } from "@/lib/data"
import { Usuario } from "@/lib/definitions"
import { redirect } from "next/navigation"
import { revalidatePath, revalidateTag } from "next/cache"
import SubmitButton from "../coordenador/SubmitButton"

export default function AdicionarUsuarioForm() {
    async function handleSubmit(form: FormData) {   
        'use server'

        const usuario = {
            nome: form.get('nome'),
            email: form.get('email'),
            senha: form.get('senha'),
            confimarSenha: form.get('confirmarSenha')
        } as Usuario

        const response = await adicionarUsuario(usuario)

        if (response.ok) {    
            revalidatePath('usuarios')
            redirect('/usuarios')
        }
     
    }
    
    return ( 
        <form action={handleSubmit} className="max-w-md mx-auto mt-8">
            <div>
                <label htmlFor="nome" className=" mb-2">
                    Nome:
                </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1"
                        required
                    />
            </div>
            <div>
                <label htmlFor="email" className=" mb-2">
                    E-mail:
                </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1"
                        required
                    />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className=" mb-2">
                    Senha:
                </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1"
                        required
                    />
            </div>
            < SubmitButton />

        </form>
    )
}