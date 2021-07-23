export const requiredField = value => {
    debugger
    const errors = {}

    if (!value.login) {
        errors.login = "how about login";
    }
    if (!value.password) {
        errors.password = "how about password";
    }
    

    return errors;
}
