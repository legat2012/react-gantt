/**
 * Переводит строку в дни
 *
 * @param {string} str - Дата в строковом формате
 * @returns {number}
 */
export const strToDays = str => Math.floor(new Date(str).getTime() / 86400000);