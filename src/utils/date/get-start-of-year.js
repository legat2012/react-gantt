/**
 * Возвращает начальную дату года
 *
 * @param {Number} year - Год
 * @returns {Date}
 */
export const getStartOfYear = year => new Date(year, 0, 1);