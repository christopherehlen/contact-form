class ResponseHeaders {
    constructor(env) {
        this.allowOrigin = (env.ALLOW_ORIGIN.endsWith('/')) ? env.ALLOW_ORIGIN.substring(0, env.ALLOW_ORIGIN.length - 1) : env.ALLOW_ORIGIN;
    }
    get(contentType) {
        let headers = {
            'Access-Control-Allow-Origin': this.allowOrigin,
            'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,HEAD,OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '86400'
        };
        if (contentType) {
            headers['content-type'] = contentType;
        }
        return headers;
    }
}


export { ResponseHeaders }