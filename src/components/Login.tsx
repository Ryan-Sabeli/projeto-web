
import LoginButton from '@/components/LoginButton'
import { loginAction } from '@/lib/actions/login'

export default function Login() {




    return (
        <div className="h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form action={loginAction}>
            <label htmlFor="email" className="block mb-2">E-mail:</label>
            <input required type="email" id="email" name="email" className="border border-gray-300 px-3 py-2 mb-4 w-full" />
            <label htmlFor="password" className="block mb-2">Senha:</label>
            <input required type="password" id="password" name="password" className="border border-gray-300 px-3 py-2 mb-4 w-full" />
            <LoginButton />
          </form>
          
        </div>
      </div>
    )
}