
import LoginButton from '@/components/LoginButton'
import { login } from '@/lib/actions/login'

export default function Login() {


    async function handleSubmit(formData: FormData) {
        'use server'

        const username = formData.get('username') as string
        const password = formData.get('password') as string
        
        await login(username, password)

    }

    return (
        <div className="h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form action={handleSubmit}>
            <label htmlFor="username" className="block mb-2">Usuário:</label>
            <input required type="text" id="username" name="username" className="border border-gray-300 px-3 py-2 mb-4 w-full" />
            <label htmlFor="password" className="block mb-2">Senha:</label>
            <input required type="password" id="password" name="password" className="border border-gray-300 px-3 py-2 mb-4 w-full" />
            <LoginButton />
          </form>
          
        </div>
      </div>
    )
}