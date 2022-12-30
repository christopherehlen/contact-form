import { simple, success, fail, invalid, disabled } from '#src/helpers/preview/states';

export default {
    adaptors: {},
    filter: {},
    params: {},
    state: {
        default: simple,
        success: success,
        fail: fail,
        invalid: invalid,
        disabled: disabled
    },
    emit: {}
};