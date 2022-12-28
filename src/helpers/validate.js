import validator from 'email-validator';

function isEmpty(value) {
    return (typeof value === 'string' && value.trim().length === 0);
}

function isValidEmail(value) {
    return !isEmpty(value) && validator.validate(value);
}

export { isEmpty, isValidEmail }