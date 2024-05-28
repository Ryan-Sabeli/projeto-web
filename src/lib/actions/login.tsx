'use server'

import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { usuarios } from "../data";
import { revalidatePath } from "next/cache";

export async function loginAction(formData: FormData) {
    const response = await fetch(
        `${process.env.BASE_URL_API}/json/jwt-auth/v1/token`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const data = await response.json();
      cookies().set('token', data.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
      });

  }