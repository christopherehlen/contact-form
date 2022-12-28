# Environment Variables

Environment variables configure most of the Contact Form's attributes and behavior. The .env, .env.local, and .env.prod files set most variables with some references to system environment variables, each prefixed with **SYS_**.

## Local Development

The **npm run http** script depends on local development environment variables.

**PORT:** local HTTP server port number.

## Build

The **npm run build**, **npm run watch** and **npm run deploy** scripts depend on build environment variables.

**ORGANISM_NAME:** name of the organism.

**ORGANISM_ALIAS:** abbreviated alternative for organism type.

**ORGANISM_TYPE:** type of organism.

**PREFIX_WORKER_ENDPOINTS:** if the flag is true, prefix worker endpoints with a unique hash code.

**PREFIX_WORKER_VARS:** if the flag is true, prefix worker variables with a unique hash code.

**PREFIX_CSS_SELECTORS:** if the flag is true, prefix CSS selectors with a unique hash code.

**GENERATE_PREVIEW_HTML:** if the flag is true, preview HTML file is generated.

## Contact Form

The **Contact Form** widget executing in the browser depends on contact form variables.

**BASE_URL:** base URL of the site rendering the Contact Form widget.

**BASE_API_URL:** base API URL for Contact Form RESTful APIs.

**CONTACT_FORM_SHOW_ALERT:** if the flag is true, success and fail, alerts are displayed.

### Changing Contact Form Variables at Runtime

Set Contact Form variables globally with organismJS.config.env

```js
    organismJS.config.env.set('*', {
        CONTACT_FORM_SHOW_ALERT: false
    });
    organismJS.initialize(organismJS.config).then(context => {...});
```

**Or** for specific organism types

```js
    organismJS.config.env.set('christopherehlen.com/organisms/contact-form', {
        CONTACT_FORM_SHOW_ALERT: false
    });
    organismJS.initialize(organismJS.config).then(context => {...});
```

## Cloudflare Worker

Worker functions executing on the Cloudflare network depend on Cloudflare worker variables.

**ALLOW_ORIGIN:** Access-Control-Allow-Origin HTTP header.

## Notion

Worker functions executing on the Cloudflare network depend on Notions variables to communicate with the Notion API.

**NOTION_TOKEN:** token for Notion's RESTful API.

**NOTION_VERSION:** version of Notion's RESTful API.

**PAGE_NAME:** name of Notion page containing contact form database.

**DATABASE_NAME:** contact form database name.

### Changing Cloudflare Worker Variables at Runtime

Set Cloudflare Worker Variables with Cloudflare controll panel.

![Worker Variables](./images/9e01da17-44b3-4d01-43c5-e9862ff55700.webp "Worker Variables")
