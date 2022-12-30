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

## Contact Form

The **Contact Form** widget executing in the browser depends on contact form variables.

**BASE_URL:** base URL of the page rendering the Contact Form widget.

**BASE_API_URL:** base API URL for Contact Form RESTful APIs.

**CONTACT_FORM_SHOW_ALERT:** if the flag is true, success and fail, alerts are displayed.

## Cloudflare Worker

Worker functions executing on the Cloudflare network depend on Cloudflare worker variables.

**ALLOW_ORIGIN:** Access-Control-Allow-Origin HTTP header, this environment variable can have multiple origins defined, each separated by a comma. , i.e., ***https://contact-form-43i.pages.dev, https://christopherehlen.com***.

## Notion

Worker functions executing on the Cloudflare network depend on Notions variables to communicate with the Notion API.

**NOTION_TOKEN:** token for Notion's RESTful API.

**NOTION_VERSION:** version of Notion's RESTful API.

**PAGE_NAME:** name of Notion page containing contact form database.

**DATABASE_NAME:** contact form database name.

## Changing Browser Variables

Set environment variables globally with organismJS.config.env

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

## Changing Deployment Variables

1. In the left pane, click the **Pages** option.

![Pages](./images/002fb6d2-35b8-44a3-7a60-edf5ccbc1600.webp "Pages")

2. Click the **contact-form** page.

![contact-form](./images/664ea5c9-3024-4ff0-fca3-56a8d0f77c00.webp "contact-form")

3. Click the **Settings** option.

![Settings](./images/6809b2e1-bfa1-4723-fbd6-a81a7a295b00.webp "Settings")

4. In the left pane, click the **Environment Variables** option.

![Environment Variables](./images/bd3bf3c4-a3ce-4b4a-07a8-ead0594b6e00.webp "Environment Variables")

5. Click the **Edit Variables** button.

![Edit Variables](./images/db4d2943-e4e9-4f49-72b0-880078648b00.webp "Edit Variables")

6. Add, remove, and edit desired variables.
7. Click the **Save** button.

![Save](./images/50eeed4b-8e73-49c0-1953-768cf65e1300.webp "Save")

8. Click the **Deployments** option.

![Deployments](./images/d4407cd0-1cea-4a92-7ef5-2587a3e2c600.webp "Deployments")

8. Click the **View Details** option of the current build.

![View Details](./images/20446d5e-f1c3-486c-c3db-a4f8c4f75500.webp "View Details")

9. In the **Manage deployment** drop-down list, click the **Retry deployment** option.

![View Details](./images/069d7e32-367c-4816-257b-ce1eb9539e00.webp "View Details")

## Changing Worker Variables

1. In the left pane, click the **Workers** option.

![Workers](./images/122155d8-feb1-4c95-8857-b481d86f6f00.webp "Workers")

2. Click the **contact-form** worker.

![contact-form](./images/be304fa4-87d3-47a3-f41e-a2f24c30df00.webp "contact-form")

3. Click the **Settings** option.

![Settings](./images/7d6b9134-5e1d-47f0-b85c-2582b3dc3400.webp "Settings")


4. In the left pane, click the **Variables** option.

![Variables](./images/3282f7ae-7f9c-4942-6cbe-7c45d3f09000.webp "Variables")

5. Click the **Edit variables** button.

![Edit variables](./images/2f2446a0-b9b8-4512-74e2-b9934dac9500.webp "Edit variables")

6. Add, remove, and edit desired variables.
7. Click the **Save and deploy** button.

![Save and deploy](./images/8cd25a81-a9e5-4cb4-52b8-baedea382e00.webp "Save and deploy")