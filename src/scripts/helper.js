export function singularOrPlural(number, singular, plural) {
    const form = number === 1 ? singular : plural;
    return `${number} ${form}`;
}

export function capitalizeFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
