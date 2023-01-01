# contact-form

Detailed documentation at <a href="https://christopherehlen.com/organisms/contact-form" target="_blank">https://christopherehlen.com/organisms/contact-form</a>.
 
1. Clone the **Contact Form** repository.

```bash
git clone https://github.com/christopherehlen/contact-form.git
```

2. Change to contact-form directory.

```bash
cd contact-form
```

3. Install packages.

```bash
npm install
```

4. Edit Notion evironment variables.
    1. Rename **.env.local.sample** to **.env.local**.
    2. Open the **.env.local** file in the project root directory.
    3. Uncomment the Notion variables.
    4. Set **_NOTION_TOKEN** to the Notion API token.
    5. Set **_NOTION_VERSION** to "2022-06-28".
    6. Set **_PAGE_NAME** to the name of the Notion page that will contain the contact form database.
    7. Set **_DATABASE_NAME** to "Contact Form".

```bash
###
# Notion variables
#
##
_NOTION_TOKEN = secret_GfjiEQSIFlfj1idoiajd
_NOTION_VERSION = 2022-06-28
_PAGE_NAME = Online Forms
_DATABASE_NAME = Contact Form
```

5. Build contact-form.

```bash
npm run build
```

**Or** to build automatically when files change.

```bash
npm run watch
```

6. In a separate terminal, start the local Cloudflare server.

```bash
npm run worker
```

7. In a separate terminal, start the local HTTP server.

```bash
npm run http
```

### IMPORTANT READ BEFORE CONTINUING ON TO STEP 8!

The **Contact Form** database will be created the first time a **Contact Form** is rendered; this will take 15-60 seconds, and during this time, the form will be disabled. Wait to reload the page until this process has completed.

8. In browser goto ```http://localhost:8080/organisms/contact-form.html?width=30pct```