/**
 * Ограничивает значение по нижней границе
 *
 * @param {any} value - Значение
 * @param {any} floor - Нижняя граница
 * @returns {any}
 */
export const floorTo = (value, floor) => floor > value ? floor : value;