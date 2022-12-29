import { FormModel, FormState } from '#generated/models';
import { GetDatabase, CreateContactMessage } from '#generated/cloudflare/client';
import { isEmpty, isValidEmail } from '#src/helpers/validate';

const _initialize = {
    eventType: '_initialize',
    listener: (request, response, env) => {
        let state = response.state = (Object.getOwnPropertyNames(request.state).length > 0) ? request.state : new FormState();
        let envShowAlert = env.CONTACT_FORM_SHOW_ALERT;
        state.showAlert = (!envShowAlert || envShowAlert.trim().toLowerCase() === 'true')
        response.model = new FormModel(response.state);
    }
};

const _postInitialize = {
    eventType: '_postInitialize',
    listener: (request, response, env) => {
        let asyncEmitEvent = response.emitEvent;
        (new GetDatabase(env)).call().then((httpResponse) => {
            if (httpResponse.data && httpResponse.data.successful) {
                asyncEmitEvent('_onReady', { databaseId: httpResponse.data.objectId });
            }
        });
    }
};

const _onReady = {
    eventType: '_onReady',
    listener: (request, response, env) => {
        let state = response.state;
        state.databaseId = request.event.databaseId;
        state.ready = true;
        response.model = new FormModel(state);
    }
};

const _onFormChange = {
    eventType: '_onFormChange',
    listener: (request, response, env) => {
        let event = request.event;
        let state = response.state;
        state[event.fieldName] = event.value;
        state.sendSuccessful = false;
        state.sendFailed = false;
        response.model = new FormModel(state);
    }
};

const _onSend = {
    eventType: '_onSend',
    listener: (request, response, env) => {
        let state = response.state;
        state.sendAttempts++;
        state.sendSuccessful = false;
        state.sendFailed = false;
        state.sendInProgress = !(isEmpty(state.subject) ||
            isEmpty(state.name) ||
            !isValidEmail(state.email) ||
            isEmpty(state.message));
        if (state.sendInProgress) {
            let asyncEmitEvent = response.emitEvent;
            (new CreateContactMessage(env)).call({
                databaseId: state.databaseId,
                subject: state.subject,
                name: state.name,
                email: state.email,
                content: state.message
            }).then((httpResponse) => {
                if (httpResponse.data && httpResponse.data.successful) {
                    asyncEmitEvent('onSendSuccessful', {});
                } else {
                    asyncEmitEvent('onSendFailure', {});
                }
            }).catch((error) => {
                asyncEmitEvent('onSendFailure', {});
            });
        }
        response.model = new FormModel(state);
    }
};

const onSendSuccessful = {
    eventType: 'onSendSuccessful',
    listener: (request, response, env) => {
        let state = response.state;
        state.subject = '';
        state.name = '';
        state.email = '';
        state.message = '';
        state.sendSuccessful = true;
        state.sendInProgress = false;
        state.sendAttempts = 0;
        response.model = new FormModel(state);
    }
};

const onSendFailure = {
    eventType: 'onSendFailure',
    listener: (request, response, env) => {
        let state = response.state;
        state.sendFailed = true;
        state.sendInProgress = false;
        response.model = new FormModel(state);
    }
};

const onClearForm = {
    eventType: 'onClearForm',
    listener: (request, response, env) => {
        let state = response.state;
        state.subject = '';
        state.name = '';
        state.email = '';
        state.message = '';
        state.sendSuccessful = false;
        state.sendFailed = false;
        state.sendInProgress = false;
        state.sendAttempts = 0;
        response.model = new FormModel(state);
    }
};

export { _initialize, _postInitialize, _onReady, _onFormChange, _onSend, onSendSuccessful, onSendFailure, onClearForm }