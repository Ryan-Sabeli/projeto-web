'use server'

import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { usuarios } from "../data";
import { revalidatePath } from "next/cache";

export async function login(username:string, password: string) {
    try {
        if (username == 'Maria' && password == 'admin123')  {
            usuarios[1].logado = true
            
        }
        
        if (username == 'João' && password == 'senha123')  {
            usuarios[0].logado = true
            
        }

    } catch (err) {
        return false
    }
    revalidatePath('/')
    redirect('/')
  }