import { simple, success, fail, invalid, disabled } from '#src/helpers/preview/states';
import happyPath from '#src/helpers/preview/happy-path';
import sadPath from '#src/helpers/preview/sad-path';
import invalidInputPath from '#src/helpers/preview/invalid-input-path';

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
    emit: {
        "happy-path": happyPath,
        "sad-path": sadPath,
        "invalid-input-path": invalidInputPath
    }
};