## Fork Contact Form

1. Log in to <a href="https://www.github.com/" target="_blank">**GitHub**</a>.
2. Navigate to <a href="https://github.com/christopherehlen/contact-form" target="_blank">**github.com/christopherehlen/contact-form**</a> repository.
2. In the upper right corner, click the **Fork** button.

![Fork](./images/9e0e3fd4-4ceb-4088-b492-72ff5ca25a00.webp "Fork")

2. Click the **Create fork** button.

![Create Fork](./images/1d9e7ae9-83ef-4ef1-51e6-2ebed8475500.webp "Create Fork")

## Create Worker Subdomain

**You will only have to complete this step the first time you create a worker for this account.**

1. Log in to <a href="https://www.cloudflare.com/" target="_blank">**Cloudflare**</a>.
2. In the left pane, click the **Workers** option.

![Workers](./images/dab11411-b760-4505-251f-b31cf530ba00.webp "Workers")

3. If prompted, set the account's worker subdomain.

![New Subdomain](./images/017f79cd-3b23-45c3-ec46-48621a571e00.webp "New Subdomain")

4. If prompted, verify email account.

![Verify Email](./images/2f230bbc-3559-40cc-e4dc-125bbe18f400.webp "Verify Email")

![Verified](./images/7636ce3b-6d41-459f-cc87-a18ddc335f00.webp "Verified")

5. Navigate to Workers Overview page.

![Workers Overview](./images/1965d0da-f248-48ff-641a-69af58b15c00.webp "Workers Overview")

6. Your **Subdomain** and **Account ID** are in the right pane. Save both the **Subdomain** and **Account ID** somewhere; you will need them to set the **Contact Form's** environment variables later.

![Account ID](./images/a4691f04-dbe7-4380-2a0b-6414b656c400.webp "Account ID")


## Create API Token

1. From the previous step, click the **API tokens** option.

2. Click the **Create Token** button.

![Api Tokens](./images/9a1b96cf-5f13-4e81-4f09-41514685a300.webp "Api Tokens")

3. In the **Edit Cloudflare Workers** option, click the **Use Template** button.

![Template](./images/ea40debf-c2b0-4a81-27b3-f461a8526d00.webp "Template")

4. Set **Include All...** for both **Account and Zone Resources**.

![Form](./images/e7a3f405-3649-48ba-18dd-959ae994d900.webp "Form")

5. Click the **Continue to Summary** button.

![Token Summary](./images/6c73b135-6dd4-495e-18bd-2e70266fb600.webp "Token Summary")

6. Click the **Create Token** button.

![Create Token](./images/8b95aeb8-281b-4a74-5fe6-af8a93023200.webp "Create Token")

7. Click the **Copy** button. Save the token somewhere; you will need it to set the **Contact Form's** environment variables later. **IMPORTANT!** this is the only time the API token will be visible to you; if you lose the token, you must create a new one.

![Copy Token](./images/813d6f95-7ac9-4fcf-337e-33048efc3400.webp "Copy Token")

8. Click back to My Profile.

![My Profile](./images/1bf60bfd-0ae9-4fee-b1d4-ad364b539c00.webp "Verified")

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

7. Select **contact-form** optionn.

![Select Contact Form](./images/63664928-d621-4adc-32ec-791043629200.webp "Select Contact Form")

8. Click the **Begin setup** button.

![Begin setup](./images/14bdff36-e776-480d-644c-b91e2c045d00.webp "Begin setup")

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
    - Set **CLOUDFLARE_ACCOUNT_ID** to the **Account ID** saved in **Create Worker Subdomain** section **Step 6**.
    - Set **CLOUDFLARE_API_TOKEN** to the **API Token** saved in **Create API Token** section **Step 7**.
    - Set **SYS_ALLOW_ORIGIN** to the **Domain Name** saved in **Setup Build** section **Step 1** i.e., ```https://contact-form-43i.pages.dev```
    - Set **SYS_BASE_URL** to the **Domain Name** saved in **Setup Build** section **Step 1** i.e., ```https://contact-form-43i.pages.dev```
    - Set **SYS_BASE_API_URL** to the **Worker Subdomain** with a **contact-form** prefix saved in **Create Worker Subdomain** section **Step** 6, i.e., ```https://contact-form.blue-squirrel.workers.dev```
    - Set **SYS_NOTION_TOKEN** to the **API Token** saved in **Generate a Notion Integration Token** section **Step 7**.
    - Set **SYS_PAGE_NAME** to the **Name** saved in **Create a Notion Page** section **Step 3**.

5. Click the **Save and Deploy** button.

![Save and Deploy](./images/968a1abb-18eb-4cf9-581d-9cb22a55ef00.webp "Save and Deploy")

### IMPORTANT READ BEFORE CONTINUING ON TO STEP 6!

The **Contact Form** database will be created the first time a **Contact Form** is rendered; this will take 15-60 seconds, and during this time, the form will be disabled. Wait to reload the page until this process has completed.

6. Once successfully deployed, navigate to the **Domain Name** saved in **Setup Build** section **Step 1** i.e., ```https://contact-form-43i.pages.dev```