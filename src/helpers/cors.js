function responseHeaders(origin, allowOrigin, contentType) {
    let headers = {
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,HEAD,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400'
    };
    if (allowOrigin !== '*') {
        allowOrigin = (allowOrigin.includes(origin)) ? origin : null;
    }
    if (allowOrigin) {
        headers['Access-Control-Allow-Origin'] = allowOrigin;
    }
    if (contentType) {
        headers['content-type'] = contentType;
    }
    return headers;
}


export { responseHeaders }