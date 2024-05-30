import LoginForm from '@/components/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Logue na sua conta no site Dogs.',
};

export default async function LoginPage() {
  return (
    <section className="h-screen bg-slate-200 flex flex-col justify-center items-center">
    <div className='rounded shadow-md p-6 bg-white'>
      <h1 className="text-4xl text-bold">Login</h1>
      <LoginForm />
    </div>
    </section>
  );
}
