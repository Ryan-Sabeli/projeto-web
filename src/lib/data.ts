import { Coordenadores, Usuario, Voto } from "./definitions";
import { revalidatePath, revalidateTag } from "next/cache";
const API_URL = process.env.BASE_URL_API


export function TOKEN_POST() {
  return {
    url:  API_URL + 'token/',
  };
}


export function TOKEN_VALIDATE_POST() {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
  };
}

export function USER_GET() {
  return {
    url: API_URL + '/api/user',
  };
}

export function USER_POST() {
  return {
    url: API_URL + '/api/user',
  };
}


export async function GetUsuarios() {
  return null
}

export async function GetVotos() {
  return null 

}
export async function GetCoordenadores() {
  return null
}

export async function adicionarUsuario(usuario: Usuario) {
   return null
}


export async function adicionarCoordenador(coordenador: Coordenadores) {
  return null
}

export async function adicionarVoto(voto: Voto) {
  return null
}

