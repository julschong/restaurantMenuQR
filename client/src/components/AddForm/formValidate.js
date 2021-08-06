export function validateName(value) {
    let error;
    if (!value) {
        error = 'Restaurant Name is required';
    }
    return error;
}

export function validatePhone(value) {
    let error;
    if (!value) {
        error = 'Phone Number is required';
    }
    return error;
}

export function validateAddress(value) {
    let error;
    if (!value) {
        error = 'Address is required';
    }
    return error;
}

export function validateURL(value) {
    let error;
    if (!value) {
        error = 'URL is required';
    }
    return error;
}

export function validateDesc(value) {
    let error;
    if (!value) {
        error = 'Description is required';
    }
    return error;
}
