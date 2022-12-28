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
    emit: {}
};