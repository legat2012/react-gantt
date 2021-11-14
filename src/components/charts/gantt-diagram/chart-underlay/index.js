import React from 'react';
import styles from './styles.module.css';

/**
 * Компонент подложки диаграммы Ганта
 *
 * @param {string} heading - Заголовок участка подложки
 * @param {number} width - Ширина участка подложки в процентах
 * @param {string} background - Цвет подложки
 * @returns {JSX.Element}
 */
const ChartUnderlay = ({ heading, width, background }) => {
	return (
		<div style={{ width: `${width}%`, background }}>
			<div className={styles.chartHeading}>
				{heading}
			</div>
		</div>
	)
}

export default ChartUnderlay;