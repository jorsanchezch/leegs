function toSnakeCase(str: string) {
    return str
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove all non-word characters (except spaces)
    .replace(/\s+/g, '_'); // Replace spaces with underscores
}

function toKebabCase(str: string) {
    return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
    .replace(/\s+|_+/g, '-') // Replace spaces or underscores with hyphens
    .toLowerCase();
}

function toCamelCase(sentence: string): string {
    return sentence
      .toLowerCase()
      .split(/[\s-_]+/)
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word except the first
      .join(''); // Join them back into a single string
  }
  
export {
    toCamelCase,
    toKebabCase,
    toSnakeCase, 
};