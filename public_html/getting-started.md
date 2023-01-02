## Prerequisites

- <a href="https://github.com/" target="_blank">**GitHub**</a> account to fork/clone **github.com/christopherehlen/contact-form**.
- <a href="https://www.notion.so/" target="_blank">**Notion**</a> account to store contact messages.
- <a href="https://www.cloudflare.com/" target="_blank">**Cloudflare**</a> account to host the contact-form widget and RESTful webservices.
- Install <a href="https://github.com/git-guides/install-git" target="_blank">**git**</a> to run on your local machine. ***[Optional]***
- Install <a href="https://nodejs.org/" target="_blank">**Node.js**</a> to run on your local machine. ***[Optional]***

## Generate a Notion Integration Token

1. Log in to <a href="https://www.notion.so/" target="_blank">**Notion**</a>.
2. In the left pane, click the **Settings & Members** option.

![Settings](./images/ca3b6486-1bbd-40ec-70aa-2ebfec805500.webp "Settings")

3. In the modal, click the **My connections** option.

![My connections](./images/e67c04f4-b726-41cd-ac04-8d0ea8b7c300.webp "My connections")

4. In the modal, click the **Develop or manage integrations** option.

![Develop or manage integrations](./images/ae0fce2a-f859-4d1a-0b63-8016aeb11c00.webp "Develop or manage integrations")

5. A new browser tab will open, click the **New Integration** option.

![New Integration](./images/ab4c40e5-d73f-49af-bc23-60387feac100.webp "New Integration")

6. Type the name of the new integration and click the **Submit** button.

![Integration Form](./images/eea76daf-4967-438d-458b-c37131c7ec00.webp "Integration Form")

7. Click the **show** option then copy the token. Save the token somewhere; you will need it to configure the **Contact Form** later.

![Token](./images/f4b69a57-01e6-407d-3f51-8a6170fb7200.webp "Token")

## Create a Notion Page

1. Return to the original <a href="https://www.notion.so/" target="_blank">**Notion**</a> window.
2. In the left pane, click the **+ Add a page** option.

![Add Page](./images/a3f0aeb4-322f-404d-db0c-b1ad19743b00.webp "Add Page")

3. In the main content pane, type the name of your page. Save the page's name somewhere; you will need it to configure the **Contact Form** later.

![Name Page](./images/6bc8c72a-683f-4694-dfa2-2005e5143200.webp "Name Page")

## Add connection to Notion Page

1. In the upper right corner, click the **...** icon.

![Page Options](./images/731cc29b-2e97-418c-349b-a2a05a33fa00.webp "Page Options")

2. At the bottom of the menu, Click the **+ Add connections** option.

![Add Connection](./images/e1e55823-c1ce-4862-aa40-df32e64afe00.webp "Add Connection")

3. In the submenu, click the name of the connection created in the **Generate a Notion Integration Token** step. Sometimes there is a delay between completing the connection and when it is available. If the connection name is not there, wait a minute or two and try again.

![Select Connection](./images/08f9d1a2-0ec9-41c4-dcb1-af0f7bb0e700.webp "Select Connection")

4. In the modal, click the **confirm** button.

![Confirm Connection](./images/8ad28b63-cebc-46cf-9aba-8a629b007f00.webp "Confirm Connection")

## Setup Local Environment ***[Optional]***

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
    4. Set **_NOTION_TOKEN** to the API token generated in the **Generate a Notion Integration Token** section **Step 7**.
    5. Set **_NOTION_VERSION** to "2022-06-28".
    6. Set **_PAGE_NAME** to the page name created in the **Create a Notion Page** section **Step 3**.
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

![Contact Form](./images/446a5443-3400-4f4d-e4bf-4be37a415500.webp "Contact Form")