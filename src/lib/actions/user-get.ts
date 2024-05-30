import { cookies } from "next/headers";
import { USER_GET } from "../data";
import { Usuario } from "../definitions";
import apiError from "../functions/api-error";

export default async function userGet() {
    try {
      const token = cookies().get('token')?.value;
      if (!token) throw new Error('Token não encontrado.');
      const { url } = USER_GET();
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        next: {
          revalidate: 60,
        },
      });
      if (!response.ok) throw new Error('Erro ao pegar o usuário.');
      const data = (await response.json()) as Usuario;
      return { data, ok: true, error: '' };
    } catch (error: unknown) {
      return apiError(error);
    }
  }
  