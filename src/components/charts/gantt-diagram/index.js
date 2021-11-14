import React from 'react';
import styles from './styles.module.css';
import ChartValue from './chart-value';
import ChartUnderlay from './chart-underlay';
import { min } from '../../../utils/math/min';
import { max } from '../../../utils/math/max';
import { strToDays } from '../../../utils/convert/str-to-days';
import { getYear } from '../../../utils/date/get-year';
import { getStartOfYear } from '../../../utils/date/get-start-of-year';
import { getEndOfYear } from '../../../utils/date/get-end-of-year';
import { ceilTo } from '../../../utils/math/ceil-to';
import { floorTo } from '../../../utils/math/floor-to';
import { range } from '../../../utils/array/range';
import { percentage } from '../../../utils/math/percentage';

/**
 * Компонент Диаграммы Ганта
 *
 * @param {Array} timeIntervals - Временные промежутки
 * @returns {JSX.Element}
 */
function GanttDiagram({ timeIntervals }) {

	const calculateBounds = intervals => {
		return intervals
			.reduce((acc, interval) => {
				const start = min(acc.start, strToDays(interval.dateFrom));
				const end = max(acc.end, strToDays(interval.dateTo));

				return {
					start,
					end,
					length: end - start,
					startYear: min(acc.startYear, getYear(interval.dateFrom)),
					endYear: max(acc.endYear, getYear(interval.dateTo)),
				}
			},
			{
				start: Infinity,
				end: 0,
				startYear: Infinity,
				endYear: 0,
				length: 0,
			}
		);
	};

	const buildStructure = (intervals) => {
		const bounds = calculateBounds(intervals);

		const yearStruct = range(bounds.startYear, bounds.endYear)
			.map(year => {
				const startOfYear = floorTo(strToDays(getStartOfYear(year).toUTCString()), bounds.start);
				const endOfYear = ceilTo(strToDays(getEndOfYear(year).toUTCString()), bounds.end);

				return [
					year,
					{
						offset: Math.round(percentage(startOfYear - bounds.start, bounds.length)),
						width: Math.round(percentage(endOfYear - startOfYear, bounds.length)),
						background: year % 2 === 0 ? '#F2F4F5' : '#E6E9EB'
					}
				]
			});

		const intervalStruct = intervals
			.map(interval => {
				const dateFrom = strToDays(interval.dateFrom);
				const dateTo = strToDays(interval.dateTo);

				return {
					...interval,
					dateFrom: new Date(interval.dateFrom).toLocaleDateString(),
					dateTo: new Date(interval.dateTo).toLocaleDateString(),
					width: percentage(dateTo - dateFrom, bounds.length),
					offset: percentage(dateFrom - bounds.start, bounds.length),
				}
			});

		return {
			intervals: intervalStruct,
			years: yearStruct
		}
	}

	const structure = buildStructure(timeIntervals);

	return (
		<>
			{structure.intervals.length && structure.years.length && (
				<div className={styles.ganttChart}>
					<div className={styles.chartUnderlay}>
						{structure.years
							.map(([year, props]) =>
								<ChartUnderlay
									key={year}
									heading={year}
									width={props.width}
									background={props.background}
								/>
							)
						}
					</div>
					<div className={styles.chartContent}>
						{structure.intervals.map(interval =>
							<ChartValue
								key={interval.id}
								width={interval.width}
								offset={interval.offset}
								background={interval.background}
							/>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default GanttDiagram;