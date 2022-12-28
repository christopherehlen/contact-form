import { FormState } from "./form-state";
import { isEmpty, isValidEmail } from '#src/helpers/validate';

const REQUIRED_MSG = '*Required';
const INVALID_MSG = '*Invalid';

class FormModel {
    constructor(state) {
        Object.assign(this, state ?? new FormState());
    }
    alert() {
        return {
            showSuccessAlert: this.sendSuccessful,
            showFailureAlert: this.sendFailed
        };
    }
    subjectField() {
        return {
            subject: this.subject,
            errorMessage: REQUIRED_MSG,
            invalid: (this.sendAttempts > 0 && isEmpty(this.subject)),
            disabled: this.isDisabled()
        };
    }
    nameField() {
        return {
            name: this.name,
            errorMessage: REQUIRED_MSG,
            invalid: (this.sendAttempts > 0 && isEmpty(this.name)),
            disabled: this.isDisabled()
        };
    }
    emailField() {
        let errorMessage = (isEmpty(this.email)) ? REQUIRED_MSG : INVALID_MSG;
        return {
            email: this.email,
            errorMessage: errorMessage,
            invalid: (this.sendAttempts > 0 && !isValidEmail(this.email)),
            disabled: this.isDisabled()
        };
    }
    messageField() {
        return {
            message: this.message,
            errorMessage: REQUIRED_MSG,
            invalid: (this.sendAttempts > 0 && isEmpty(this.message)),
            disabled: this.isDisabled()
        };
    }
    sendButton() {
        return {
            disabled: this.isDisabled()
        };
    }
    isDisabled() {
        return (!this.ready || this.sendInProgress);
    }
}

const Index = FormModel;

export { Index, FormModel }