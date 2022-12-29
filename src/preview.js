import { EmitSequence, SequenceEvent } from '@christopherehlen/atomic/utility';
import { FormState } from '#generated/models';

const defalut = new FormState();

const success = new FormState();
success.ready = true;
success.sendSuccessful = true;

const fail = new FormState();
fail.subject = 'A Very Important Topic';
fail.name = 'John Doe';
fail.email = 'email@mrdoe.com';
fail.message = 'This message will fail!';
fail.ready = true;
fail.sendFailed = true;

const invalid = new FormState();
invalid.name = 'John Doe';
invalid.email = 'Bad email address, please fix it!';
invalid.ready = true;
invalid.sendAttempts = 1;

const disabled = new FormState();
disabled.subject = 'A Very Important Topic';
disabled.name = 'John Doe';
disabled.email = 'email@mrdoe.com';
disabled.message = 'This message is being sent right now!';
disabled.ready = true;
disabled.sendInProgress = true;

let onFormChangeEventType = "christopherehlen.com/organisms/contact-form#_onFormChange";
let onSendEventType = "christopherehlen.com/organisms/contact-form#_onSend";
let clearFormEventType = "christopherehlen.com/organisms/contact-form#clearForm";

let source = {
    id: "contact-form",
    type: "christopherehlen.com/organisms/contact-form",
    group: "contact-form"
  };

let happyPath = new EmitSequence();
happyPath.initialDelay = 3000;
happyPath.repeatDelay = 3000;

let sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "subject",
    value: "Can we get on a call next week?"
  };
sequenceEvent.delay = 2500;
happyPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "name",
    value: "Wile E. Coyote"
  };
sequenceEvent.delay = 2500;
happyPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "email",
    value: "email@coyote.com"
  };
sequenceEvent.delay = 2500;
happyPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "message",
    value: "I am interested in buying the anvil I saw in  ACME Catalog. I want to discuss availability and price."
  };
sequenceEvent.delay = 2500;
happyPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onSendEventType;
sequenceEvent.source = source;
sequenceEvent.event = {};
sequenceEvent.delay = 2500;
happyPath.events.push(sequenceEvent);

let sadPath = new EmitSequence();
sadPath.initialDelay = 3000;
sadPath.repeatDelay = 500;

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "subject",
    value: "Can we get on a call next week?"
  };
sequenceEvent.delay = 2500;
sadPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "name",
    value: "Wile E. Coyote"
  };
sequenceEvent.delay = 2500;
sadPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "email",
    value: "email@coyote.com"
  };
sequenceEvent.delay = 2500;
sadPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "message",
    value: "I am interested in buying the anvil I saw in  ACME Catalog. I want to discuss availability and price.\n\nThis message is going to fail."
  };
sequenceEvent.delay = 2500;
sadPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onSendEventType;
sequenceEvent.source = source;
sequenceEvent.event = {};
sequenceEvent.delay = 4000;
sadPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = clearFormEventType;
sequenceEvent.source = source;
sequenceEvent.event = {};
sequenceEvent.delay = 500;
sadPath.events.push(sequenceEvent);

export default {
    adaptors: {},
    filter: {},
    params: {},
    state: {
        default: defalut,
        success: success,
        fail: fail,
        invalid: invalid,
        disabled: disabled
    },
    emit: {
        happyPath: happyPath,
        sadPath: sadPath
    }
};