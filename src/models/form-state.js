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

export { FormState }