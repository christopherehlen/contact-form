import { ResponseHeaders } from '#src/helpers/cors';

let corsPreflight = {
    method: 'OPTIONS', path: '/contact-message/*',
    handler: (request, env, context) => {
        return new Response(null, { status: 200, headers: (new ResponseHeaders(env)).get() });
    }
}

export { corsPreflight }