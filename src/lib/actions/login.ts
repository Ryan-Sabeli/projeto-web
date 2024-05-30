'use server'

import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { TOKEN_POST } from "../data";
import { revalidatePath } from "next/cache";
import { Token } from "../definitions";
import apiError from "../functions/api-error";

export default async function loginAction(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password) throw new Error('Preencha os dados.');
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Senha ou usuário inválidos.');
    const data = await response.json();
    cookies().set('token', data.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}