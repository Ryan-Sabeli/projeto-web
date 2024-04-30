
export type Usuario = {
    id?: number
    nome: string
    email: string
    senha: string
    confimarSenha: string 
    logado?: boolean
    
}

export type Coordenadores = {
    id?: number
    nome: string
    bairro: string
    telefone: string
    email: string
    senha: string  
    confimarSenha?: string 
}

export type Voto = {
    id?: number
    coordenador: string
    nome: string
    email: string
    dataNascimento: string
    telefone: string
    bairro: string
    
}