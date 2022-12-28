function changeEvent(fieldName) {
    return JSON.stringify({
        sourceEventType: 'keyup',
        targetEventType: '_onFormChange',
        mapping: {
            fieldName: { default: fieldName },
            value: 'event.currentTarget.value'
        }
    });
}

function clickEvent() {
    return JSON.stringify({
        sourceEventType: 'click',
        targetEventType: '_onSend',
        mapping: {}
    });
}

export { changeEvent, clickEvent }