export { default } from 'next-auth/middleware'

export const config = {
    matcher: [
        '/dashboard((?!signup|_axiom|_api|_next/static|_next/image).*)'

    ]
}
