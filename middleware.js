import { NextResponse } from 'next/server';

export function middleware(request) {
  // Vercel detecta automáticamente la ubicación por IP
  const country = request.headers.get('x-vercel-ip-country');

  // 'NI' es el código ISO para Nicaragua; bloquea el acceso con un error 403
  if (country === 'NI') {
    return new NextResponse('Acceso denegado.', { status: 403 });
  }

  return NextResponse.next();
}

// Asegura que se aplique a todas las páginas, ignorando archivos estáticos
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
