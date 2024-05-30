
export type Usuario = {
    id?: number 
    nome: string
    municipio: string
    telefone: string
    email: string
    senha: string
    is_adm: boolean
    
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

export type Token = {
    access_token: string
    refresh_token: string
    token_type: string
}

export type InputProps = React.ComponentProps<'input'> & {
    label: string;
    error?: string;
  };