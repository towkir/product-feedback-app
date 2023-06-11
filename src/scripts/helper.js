export function singularOrPlural(number, singular, plural) {
    const form = number === 1 ? singular : plural;
    return `${number} ${form}`;
}
