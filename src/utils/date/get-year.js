/**
 * Возвращает полный год
 *
 * @param {string} dateStr - Дата
 * @returns {number}
 */
export const getYear = dateStr => new Date(dateStr).getFullYear();