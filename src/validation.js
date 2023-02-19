const isInteger = (value) => Number.isInteger(value);
const isPositiveNumber = (number) => number > 0;

export const isPositiveInteger = (value) => isInteger(value) && isPositiveNumber(value);

export const isValidRestartCommand = (command) => command === 'y' || command === 'n';