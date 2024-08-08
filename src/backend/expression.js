export const obfuscateEmail = (email) => {
    if (email !== null) {
        const atIndex = email.indexOf('@');
        const email_subString = atIndex >= 3 ? email.slice(atIndex - 3) : email;
        return '*****' + email_subString;
    }
    return null;
};