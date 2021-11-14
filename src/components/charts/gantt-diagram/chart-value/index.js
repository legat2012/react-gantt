import React from 'react';
import styles from './styles.module.css';

/**
 * Компонент значения диаграммы Ганта
 *
 * @param {number} width - Длина линии
 * @param {number} offset - Смещение линии от начала координат
 * @param background - Цвет линии
 * @returns {JSX.Element}
 */
const ChartValue = ({ width, offset, background }) => {
	return (
		<div className={styles.chartValue}>
			<div
				className={styles.chartLine}
				style={{
					width: `${width}%`,
					marginLeft: `${offset}%`,
					backgroundColor: background
				}}
			/>
		</div>
	)
};

export default ChartValue;