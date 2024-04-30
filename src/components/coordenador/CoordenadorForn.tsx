import { adicionarCoordenador, adicionarUsuario } from "@/lib/data"
import { Coordenadores, Usuario } from "@/lib/definitions"
import { redirect } from "next/navigation"
import { revalidatePath, revalidateTag } from "next/cache"
import SubmitButton from "./SubmitButton"


export default function AdicionarCoordenadorForm() {
    async function handleSubmit(form: FormData) {   
        'use server'

        const coordenador = {
            nome: form.get('nome'),
            bairro: form.get('bairro'),
            telefone: form.get('telefone'),
            email: form.get('email'),
            senha: form.get('senha'),
            confimarSenha: form.get('confirmarSenha')
        } as Coordenadores

        const response = await adicionarCoordenador(coordenador)

        if (response.ok) {    
            revalidatePath('coordenador')
            revalidatePath('voto')
            redirect('/coordenador')
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
                <label htmlFor="bairro" className=" mb-2">
                    Bairro:
                </label>
                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1"
                        required
                    />
            </div>
            <div>
                <label htmlFor="telefone" className=" mb-2">
                    Tefelefone:
                </label>
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1"
                        required
                    />
            </div>
            <div>
                <label htmlFor="email" className=" mb-2">
                    E-mail:
                </label>
                    <input
                        type="email"
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