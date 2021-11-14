/**
 * Возвращает последнюю дату года
 *
 * @param {Number} year - Год
 * @returns {Date}
 */
export const getEndOfYear = year => new Date(year, 11, 31);