## Fork Contact Form

1. Log in to <a href="https://www.github.com/" target="_blank">**GitHub**</a>.
2. Navigate to <a href="https://github.com/christopherehlen/contact-form" target="_blank">**github.com/christopherehlen/contact-form**</a> repository.
2. In the upper right corner, click the **Fork** button.

![Fork](./images/9e0e3fd4-4ceb-4088-b492-72ff5ca25a00.webp "Fork")

2. Click the **Create fork** button.

![Create Fork](./images/1d9e7ae9-83ef-4ef1-51e6-2ebed8475500.webp "Create Fork")

## Create Worker Subdomain

1. Log in to <a href="https://www.cloudflare.com/" target="_blank">**Cloudflare**</a>.
2. In the left pane, click the **Workers** option.

![Workers](./images/dab11411-b760-4505-251f-b31cf530ba00.webp "Workers")

3. If prompted, set the account's worker subdomain.

![New Subdomain](./images/fccbcd45-7106-4657-1c48-ca60afd80a00.webp "New Subdomain")

4. Your **Subdomain** and **Account ID** are in the right pane. Save both the **Subdomain** and **Account ID** somewhere; you will need them to set the **Contact Form's** environment variables later.

![Api Tokens](./images/a4691f04-dbe7-4380-2a0b-6414b656c400.webp "Api Tokens")


## Create API Token

1. From the previous step, click the **API tokens** option.

2. Click the **Create Token** button.

![Api Tokens](./images/9a1b96cf-5f13-4e81-4f09-41514685a300.webp "Api Tokens")

3. In the **Edit Cloudflare Workers** option, click the **Use Template** button.

![Template](./images/ea40debf-c2b0-4a81-27b3-f461a8526d00.webp "Template")

3. Set **Include All...** for both **Account and Zone Resources**.

![Form](./images/e7a3f405-3649-48ba-18dd-959ae994d900.webp "Form")

3. Click the **Continue to Summary** button.

![Token Summary](./images/6c73b135-6dd4-495e-18bd-2e70266fb600.webp "Token Summary")

3. Click the **Create Token** button.

![Create Token](./images/8b95aeb8-281b-4a74-5fe6-af8a93023200.webp "Create Token")

4. Click the **Copy** button. Save the token somewhere; you will need it to set the **Contact Form's** environment variables later. **IMPORTANT!** this is the only time the API token will be visible to you; if you lose the token, you must create a new one.

![Copy Token](./images/813d6f95-7ac9-4fcf-337e-33048efc3400.webp "Copy Token")

## Connect to GitHub

1. In the left pane, click the **Pages** option.

![Pages](./images/723a9b18-fb4f-47ba-38c0-fec16397de00.webp "Pages")

2. Click the **Create a Project** button.

![Create Project](./images/810d383f-b055-461e-48a4-ef60d57df300.webp "Create Project")

3. Click the **Connect to Git** button.

![Connect Git](./images/d71f51da-4b8a-4665-030a-d75057582000.webp "Connect Git")

4. Click the **Connect GitHub** button.

![Connect GitHub](./images/2adfbd05-0071-4a5d-168f-3cddf1233d00.webp "Connect GitHub")

5. If prompted, sign in to **GitHub**.

![Connect GitHub](./images/d64cc3c4-593f-4976-9097-7bdd02b55e00.webp "Connect GitHub")

6. If prompted, authorize **Cloudflare** access to **GitHub**.

![Connect GitHub](./images/fb710868-3e16-4a5b-06a9-ba1622c8de00.webp "Connect GitHub")

7. Select **contact-form** option and click **Begin setup** button.

![Select Contact Form](./images/76c2089d-c67c-4199-5fb7-4c2573d58d00.webp "Select Contact Form")


## Setup Build

1. Set the **Project name** field to **contact-form**. Save the **Domain** listed below **Project name** field; you will need it to set the **Contact Form's** environment variables later.

![Project Name](./images/dd87c310-05ce-4688-8619-97c421277800.webp "Project Name")

2. Set the **Build command** field to **npm run deploy**.
3. Set the **Build output directory** field to **public_html**.

![Build Options](./images/cd8674bb-0f2b-4953-ce09-30e6c5081600.webp "Build Options")

4. Click the **Environment Variables** dropdown.

![Environment Variables](./images/a81dd30b-2318-4930-8aaa-86f9ec7ef000.webp "Environment Variables")

5. Add the following environment variables.
    - Set **NODE_VERSION** to 16.13.1.
    - Set **CLOUDFLARE_ACCOUNT_ID** to the **Account ID** saved in **Create Worker Subdomain** section **Step 4**.
    - Set **CLOUDFLARE_API_TOKEN** to the **API Token** saved in **Create API Token** section **Step 4**.
    - Set **$SYS_ALLOW_ORIGIN** to the **Domain Name** saved in **Setup Build** section **Step 1**.
    - Set **SYS_BASE_URL** to the **Domain Name** saved in **Setup Build** section **Step 1**.
    - Set **SYS_BASE_API_URL** to the **Worker Subdomain** with a **contact-form** prefix saved in **Create Worker Subdomain** section **Step** 4, i.e., ***contact-form.blue-squirrel.workers.com***.
    - Set **SYS_NOTION_TOKEN** to the **API Token** saved in **Generate a Notion Integration Token** section **Step 7**.
    - Set **SYS_PAGE_NAME** to the **Name** saved in **Create a Notion Page** section **Step 3**.

5. Click the **Save and Deploy** button.

![Save and Deploy](./images/968a1abb-18eb-4cf9-581d-9cb22a55ef00.webp "Save and Deploy")