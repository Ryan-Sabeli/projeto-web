import { NextResponse, type NextRequest } from 'next/server';
import verifyToken from './lib/functions/verify-token';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const authenticated = token ? await verifyToken(token) : false;
  const { pathname } = request.nextUrl;

  // Condição para redirecionar usuários não autenticados para a página de login
  if (!authenticated && pathname !== '/login' && pathname !== '/api' && pathname !== '') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Condição para redirecionar usuários autenticados para a página inicial se tentarem acessar a página de login
  if (authenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/usuarios/:path*', '/login/:path*', '/coordenador/:path*', '/voto/:path*'],
};
