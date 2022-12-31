import { responseHeaders } from '#src/helpers/cors';

let createContactMessage = {
    method: 'POST', path: '/contact-message',
    handler: async (request, env, context) => {
        let { _NOTION_TOKEN, _NOTION_VERSION } = env;
        let contactMessage = await request.json();
        let data = await createNotionPage(_NOTION_TOKEN, _NOTION_VERSION, contactMessage);
        let origin = request.headers.get('origin');
        let allowOrigin = env._ALLOW_ORIGIN;
        return new Response(data, { status: 200, headers: responseHeaders(origin, allowOrigin, 'application/json') });
    }
};

async function createNotionPage(token, version, contactMessage) {
    let response = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`,
            'Notion-Version': version
        },
        body: JSON.stringify({
            parent: {
                database_id: contactMessage.databaseId
            },
            properties: {
                Subject: {
                    type: "title",
                    title: [{
                        type: "text",
                        text: {
                            content: contactMessage.subject
                        }
                    }]
                },
                From: {
                    type: "rich_text",
                    rich_text: [{
                        type: "text",
                        text: {
                            content: contactMessage.name
                        }
                    }]
                },
                Email: {
                    type: "email",
                    email: contactMessage.email
                }
            },
            children: [{
                object: "block",
                type: "paragraph",
                paragraph: {
                    rich_text: [{
                        type: "text",
                        text: {
                            content: contactMessage.content
                        }
                    }]
                }
            }]
        })
    });
    return JSON.stringify({ successful: response.ok });
}

export { createContactMessage }