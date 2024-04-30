import { adicionarCoordenador, adicionarUsuario, adicionarVoto, coordenadores } from "@/lib/data"
import { Coordenadores, Usuario, Voto } from "@/lib/definitions"
import { redirect } from "next/navigation"
import { revalidatePath, revalidateTag } from "next/cache"
import SubmitButton from "./SubmitButton"


export default function AdicionarVotoForm() {
    async function handleSubmit(form: FormData) {   
        'use server'

        const voto = {
            coordenador: form.get('coordenador'),
            nome: form.get('nome'),
            bairro: form.get('bairro'),
            dataNascimento: new Date(form.get('dataNascimento') as string).toISOString(),
            telefone: form.get('telefone'),
            email: form.get('email'),

        } as Voto

        const response = await adicionarVoto(voto)

        if (response.ok) {    
            revalidatePath('voto')
            redirect('/voto')
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
                <label htmlFor="dataNascimento" className=" mb-2">
                    Data de nascimento:
                </label>
                    <input
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1"
                        required
                    />
            </div>
            <div className="mb-6">
                <label htmlFor="coordenador" className=" mb-2">
                    Coordenador:
                </label>
                <select className=" w-full border border-gray-900 rounded-md py-2 px-3 mt-1" name="coordenador" id="coordenador">
                    <option value="">--Selecionar coordenador--</option>
                    {coordenadores.map((coordenador) => (
                        <option key={coordenador.id} value={coordenador.nome}>{coordenador.nome}</option>
                    ))}
                </select>
            </div>
            < SubmitButton />

        </form>
    )
}