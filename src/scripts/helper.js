export function singularOrPlural(number, singular, plural) {
    const form = number === 1 ? singular : plural;
    return `${number} ${form}`;
}

export function capitalizeFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findNextValidId(arrayOfId) {
    let arrayOfNumbers = [...arrayOfId];
    arrayOfNumbers.sort((a, b) => a - b);
    return arrayOfNumbers[arrayOfNumbers.length - 1] + 1;
}
