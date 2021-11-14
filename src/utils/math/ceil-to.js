/**
 * Ограничивает значение по верхней границе
 *
 * @param {any} value - Значение
 * @param {any} ceil - Верхняя граница
 * @returns {any}
 */
export const ceilTo = (value, ceil) => ceil < value ? ceil : value;
