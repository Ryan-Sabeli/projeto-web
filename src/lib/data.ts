import { Coordenadores, Usuario, Voto } from "./definitions";
import { revalidatePath, revalidateTag } from "next/cache";


export let usuarios: Usuario[] = [
  {
    id: 1,
    nome: "João",
    email: "joao@example.com",
    senha: "senha123",
    confimarSenha: "",
    logado: false,

},
{
    id: 2,
    nome: "Maria",
    email: "maria@example.com",
    senha: "admin123",
    confimarSenha: "",
    logado: true
  },
  {
    id: 3,
    nome: "Carlos",
    email: "carlos@example.com",
    senha: "carlos123",
    confimarSenha: "",
    logado: false
  },
];

export let coordenadores: Coordenadores[] = [
  {
    id: 1,
    nome: "João Silva",
    bairro: "Centro",
    telefone: "(11) 9999-9999",
    email: "joaosilva@email.com",
    senha: "senha123"
  },
  {
    nome: "Maria Oliveira",
    bairro: "Jardim Europa",
    telefone: "(12) 8888-8888",
    email: "mariaoliveira@email.com",
    senha: "senha456"
  },
  {
    id: 2,
    nome: "Ana Perreira",
    bairro: "Vila Nova",
    telefone: "(13) 7777-7777",
    email: "candidato@email.com",
    senha: "senha789"
  },
  {
    id: 3,
    nome: "Pedro Souza",
    bairro: "Vila Nova",
    telefone: "(14) 6666-6666",
    email: "pedrosouza@email.com",
    senha: "senha1011"
  },
  {
    id: 4,
    nome: "Ana Costa",
    bairro: "Ipiranga",
    telefone: "(15) 5555-5555",
    email: "anacosta@email",
    senha: "senha1234"
  }
];

const votos: Voto[] = [
  {
    coordenador: coordenadores[0].nome, // João Silva (índice 0)
    nome: "Bruno Almeida",
    email: "brunoalmeida@email.com",
    dataNascimento: new Date(1985, 6, 15).toISOString(),
    telefone: "(16) 4444-4444",
    bairro: "Centro",
  },
  {
    coordenador: coordenadores[2].nome, // Sem nome (índice 2)
    nome: "Carlos Pereira",
    email: "carlospereira@email.com",
    dataNascimento: new Date(1990, 12, 24).toISOString(),
    telefone: "(17) 3333-3333",
    bairro: "Palhoça",
  },
  {
    coordenador: coordenadores[4].nome, // Ana Costa (índice 4)
    nome: "Ana Clara",
    email: "anaclara@email.com",
    dataNascimento: new Date(2000, 3, 8).toISOString(),
    telefone: "(18) 2222-2222",
    bairro: "jorge Texeira",
  }
];

export async function GetUsuarios() {
  return usuarios
}

export async function GetVotos() {
  return votos 

}
export async function GetCoordenadores() {
  return coordenadores
}

export async function adicionarUsuario(usuario: Usuario) {
  if (usuario.senha == usuario.confimarSenha) {
    usuarios.push(usuario)
    revalidatePath('/usuarios')
    
    return {ok: true};
  } else {
    throw new Error('As senhas informadas não são correspondentes')
  }
 
}


export async function adicionarCoordenador(coordenador: Coordenadores) {
  if (coordenador.senha == coordenador.confimarSenha) {
    coordenadores.push(coordenador)
    revalidatePath('/coordenador')
    
    return {ok: true};
  } else {
    throw new Error('As senhas informadas não são correspondentes')
  }
}

export async function adicionarVoto(voto: Voto) {
    votos.push(voto)
    revalidatePath('/voto')
    
    return {ok: true};
}

