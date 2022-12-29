import { EmitSequence, SequenceEvent } from '@christopherehlen/atomic/utility';

let onFormChangeEventType = "christopherehlen.com/organisms/contact-form#_onFormChange";
let onSendEventType = "christopherehlen.com/organisms/contact-form#_onSend";

let source = {
    id: "contact-form",
    type: "christopherehlen.com/organisms/contact-form",
    group: "contact-form"
};

let invalidInputPath = new EmitSequence();
invalidInputPath.initialDelay = 1500;
invalidInputPath.repeatDelay = 1500;

let sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onSendEventType;
sequenceEvent.source = source;
sequenceEvent.event = {};
sequenceEvent.delay = 2500
invalidInputPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "subject",
    value: "Can we get on a call next week?"
};
sequenceEvent.delay = 1500
invalidInputPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "name",
    value: "Wile E. Coyote"
};
sequenceEvent.delay = 1500
invalidInputPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "email",
    value: "None of your business!"
};
sequenceEvent.delay = 1500
invalidInputPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "message",
    value: "I am interested in buying the anvil I saw in  ACME Catalog. I want to discuss availability and price."
};
sequenceEvent.delay = 1500
invalidInputPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onFormChangeEventType;
sequenceEvent.source = source;
sequenceEvent.event = {
    fieldName: "email",
    value: "email@coyote.com"
};
sequenceEvent.delay = 1500
invalidInputPath.events.push(sequenceEvent);

sequenceEvent = new SequenceEvent();
sequenceEvent.eventType = onSendEventType;
sequenceEvent.source = source;
sequenceEvent.event = {};
sequenceEvent.delay = 2500
invalidInputPath.events.push(sequenceEvent);

export default invalidInputPath;