export const required = (value) => {
    return (!value) ? 'Field is Required!' : undefined;
};

export const maxLengthCreator = (maxLen) => (value) => {
    return (value && value.length > maxLen) ? `Must be ${maxLen} characters or less` : undefined;
 }