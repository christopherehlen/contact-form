import { responseHeaders } from '#src/helpers/cors';

let getDatabase = {
    method: 'GET',
    path: '/contact-message',
    handler: async (request, env, context) => {
        let origin = request.headers.get('origin');
        let allowOrigin = env._ALLOW_ORIGIN;
        let { _NOTION_TOKEN, _NOTION_VERSION, _PAGE_NAME, _DATABASE_NAME } = env;
        let page = await getNotionObject(_NOTION_TOKEN, _NOTION_VERSION, 'page', _PAGE_NAME);
        if (!page.successful) {
            return new Response(JSON.stringify(page), { status: 200, headers: responseHeaders(origin, allowOrigin, 'application/json') });
        }
        let database = await getNotionObject(_NOTION_TOKEN, _NOTION_VERSION, 'database', _DATABASE_NAME, page.objectId);
        if (database.successful && database.objectId) {
            database.objectId = database.objectId.replaceAll('-', '');
            return new Response(JSON.stringify(database), { status: 200, headers: responseHeaders(origin, allowOrigin, 'application/json') });
        }
        database = await createDatabase(_NOTION_TOKEN, _NOTION_VERSION, _DATABASE_NAME, page.objectId);
        database.objectId = (database.objectId) ? database.objectId.replaceAll('-', '') : null;
        if(await databaseReady(_NOTION_TOKEN, _NOTION_VERSION, _DATABASE_NAME, page.objectId)) {
            return new Response(JSON.stringify(database), { status: 200, headers: responseHeaders(origin, allowOrigin, 'application/json') });
        }
        return new Response(JSON.stringify({ successful: false, objectId: null }), { status: 200, headers: responseHeaders(origin, allowOrigin, 'application/json') });
    }
};

async function getNotionObject(token, version, objectType, objectName, parentId) {
    let response = await fetch('https://api.notion.com/v1/search', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`,
            'Notion-Version': version
        },
        body: JSON.stringify({
            filter: {
                property: 'object',
                value: objectType
            },
            sort: {
                direction: 'ascending',
                timestamp: 'last_edited_time'
            }
        })
    });
    if (!response.ok) {
        return { successful: false, objectId: null };
    }
    let objectId = await getObjectId(response, objectName, parentId);
    return {
        successful: response.ok,
        objectId: objectId
    };
}

async function createDatabase(token, version, name, parentId) {
    let response = await fetch('https://api.notion.com/v1/databases', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`,
            'Notion-Version': version
        },
        body: JSON.stringify({
            parent: {
                type: "page_id",
                page_id: parentId
            },
            title: [{
                type: "text",
                text: {
                    content: name,
                    link: null
                }
            }],
            properties: {
                Email: {
                    name: "Email",
                    type: "email",
                    email: {}
                },
                'Create Time': {
                    name: "Created Time",
                    type: "created_time",
                    created_time: {}
                },
                From: {
                    name: "From",
                    type: "rich_text",
                    rich_text: {}
                },
                Subject: {
                    id: "title",
                    name: "Subject",
                    type: "title",
                    title: {}
                }
            }
        })
    });
    if (!response.ok) {
        return { successful: false, objectId: null };
    }
    return {
        successful: true,
        objectId: (await response.json()).id
    };
}

async function databaseReady(token, version, objectName, parentId) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let id = setInterval(async () => {
            if(count > 7) {
                clearInterval(id);
                reject(false);
            }
            let database = await getNotionObject(token, version, 'database', objectName, parentId);
            if (database.successful && database.objectId) {
                clearInterval(id);
                resolve(true);
            }
            count++;
        }, 15000);
      });
}

async function getObjectId(response, objectName, parentId) {
    let objectId = null;
    (await response.json()).results.every(result => {
        let matchFound = false;
        if (parentId && result.parent.page_id.trim() !== parentId.trim()) {
            return true;
        }
        let titles = (result.properties.title) ? result.properties.title.title : result.title;
        titles.every(title => {
            if (title.plain_text.trim() === objectName.trim()) {
                matchFound = true;
                return false;
            }
            return true;
        });
        if (matchFound) {
            objectId = result.id;
            return false;
        }
        return true;
    });
    return objectId;
}

export { getDatabase }