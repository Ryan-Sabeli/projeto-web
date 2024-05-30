'use client'

import { useFormStatus } from "react-dom"


export default function Button() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            className={`${pending ? 'bg-gray-500 hover:bg-gray-700'  : 'bg-blue-500 hover:bg-blue-700' } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            disabled={pending} 
        >
            {pending ? 'Carregando...' : 'Fazer Login'}
        </button>
    )
}