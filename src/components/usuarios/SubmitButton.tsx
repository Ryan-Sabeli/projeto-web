'use client'

import { useFormStatus } from "react-dom"


export default function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type="submit" className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded">
            {pending ? 'Cadastrando...' : 'Cadastrar usuário'}
        </button>
    )
}

