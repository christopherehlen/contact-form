import { responseHeaders } from '#src/helpers/cors';

let corsPreflight = {
    method: 'OPTIONS',
    path: '/contact-message/*',
    handler: (request, env, context) => {
        let origin = request.headers.get('origin');
        let allowOrigin = env._ALLOW_ORIGIN;
        return new Response(null, { status: 200, headers: responseHeaders(origin, allowOrigin) });
    }
}

export { corsPreflight }