import { Coordenadores, Usuario, Voto } from "./definitions";


const API_URL = process.env.BASE_URL_API


export function TOKEN_POST() {
  return {
    url:  API_URL + '/token/',
  };
}


export function TOKEN_VALIDATE_POST() {
  return {
    url: API_URL + '/token/validate/',
  };
}

export function USER_GET() {
  return {
    url: API_URL + '/usuario/',
  };
}

export function USER_POST() {
  return {
    url: API_URL + '/api/user',
  };
}


export async function GetUsuarios() {
  let a = {} as Usuario[]
  return a 

}

export async function GetVotos() {
  let a = {} as Voto[]
  return a 
  
}
export async function GetCoordenadores() {
  let a = {} as Coordenadores
  return a 
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

