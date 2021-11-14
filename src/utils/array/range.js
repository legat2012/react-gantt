/**
 * Возвращает массив с диапазоном чисел
 *
 * @param {number} from - Начало диапазона
 * @param {number} to - Конец диапазона
 * @returns {Number[]}
 */
export const range = (from, to) => {
	const range = [];

	for (let i = from; i <= to; i++) {
		range.push(i);
	}

	return range;
}