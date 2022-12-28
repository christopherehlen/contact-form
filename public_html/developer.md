## JavaScript API

**contact_form.FormState:** contact form state.
```js
class FormState {
    constructor() {
        this.subject = '';
        this.name = '';
        this.email = '';
        this.message = '';
        this.ready = false;
        this.sendInProgress = false;
        this.sendSuccessful = false;
        this.sendFailed = false;
        this.sendAttempts = 0;
        this.showAlert = true;
        this.databaseId = null;
    }
}
```

**contact_form.FormModel:** view model for **index.dot** view.
```js
class FormModel {
    constructor(state) {
        Object.assign(this, state ?? new FormState());
    }
    alert() {...}
    subjectField() {...}
    nameField() {...}
    emailField() {...}
    messageField() {... }
    sendButton() {...}
    isDisabled() {...}
}
```

**contact_form.Index:** Alias for **contact_form.FormModel**.

```js
const Index = FormModel;
```

**contact_form.Widget:** view model for contact form widget.

```js
class Widget {
    constructor() {
    this.id = 'widget';
    this.group = null;
    this.state = null;
    this.params = null;
    this.filter = null;
    this.adaptor = null;
    this.model = new Index();
    this.cssPrefix = null;
    }
}
```

**contact_form.RenderOptions:** render options.

```js
class RenderOptions {
    constructor() {
        this.tagName = 'div';
        this.attributes = {};
        this.dataset = {};
        this.classes = [];
        this.style = {};
        this.append = false;
    }
}
```

**contact_form.render:** renders the contact form.

```js
function render(elementId, model, options) {...}
```

## Events

**onSendSuccessful:** event emits when a contact form message is sent successfully.

```js
{}
```

**onSendFailure:** event is emits when a contact form message send failss.

```js
{}
```

### Listen for Contact Form Events

```js
organismJS.initialize(organismJS.config).then(context => {
    context.addEventListener('christopherehlen.com/organisms/contact-form#onSendSuccessful', (source, event, stateful) => {...}, true);
    context.addEventListener('christopherehlen.com/organisms/contact-form#onSendFailure', (source, event, stateful) => {...}, true);
});
```

## CSS Variables

```css
--alert-font-family: Arial, Helvetica, sans-serif;
--alert-success-color: green;
--alert-fail-color: red;
--label-font-family:  Arial, Helvetica, sans-serif;
--label-font-Color: black;
--input-font-family:  Arial, Helvetica, sans-serif;
--invalid-font-family:  Arial, Helvetica, sans-serif;
--input-color: black;
--send-bg-color: #3498db;
--send-font-family: Arial, Helvetica, sans-serif;
--send-font-color: white;
--invalid-color: red;
```
