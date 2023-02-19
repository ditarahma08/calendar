import styles from '@/styles/Calendar.module.css'
import { days } from '../utils/constant'

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1

const Calendar = ({schedules}) => {
	const generateColumnSkip = (date) => {
		const newDate = new Date(`${year}-${month}-${date}`)
		return newDate.getDay()
	}

	const generateDay = (date, paramsMonth) => {
		const newDate = new Date(`${year}-${paramsMonth}-${date}`)
		return days[newDate.getDay()]
	}

	const daysInMonth = (month, year) => {
		return new Date(year, month, 0).getDate()
	}

	const nextMonthDates = () => {
		const dateLength = (generateColumnSkip(1) + 1) - (daysInMonth(month, year) % 7)
		let prevDates = []
		Array.from(Array(dateLength)).map((day, index) => prevDates.push(index + 1))
		return prevDates
	}

	const prevMonthDates = () => {
		const dateArrays = []
		let shownDates = []

		Array.from(Array(daysInMonth(1, year))).map((date, index) => {
			dateArrays.push({
				date: index + 1,
				day: generateDay(index + 1, month - 1)
			})
		})

		shownDates = dateArrays.slice(-(generateColumnSkip(1)))

		return shownDates
	}

	return (
		<div className={`${styles.calendar}`}>
			{prevMonthDates().map((day, index) => index < generateColumnSkip(1) && (
				<div className={styles.day}>
					<span>{day.day.toUpperCase()}</span>
					<span className={`${styles.date} ${styles.invalid}`}>{day.date}</span>
				</div>
			))}

			{schedules.map((schedule, index) => (
				<div className={`${styles.day}`} style={{ 'grid-column-start': `${index === 0 ? generateColumnSkip(1) + 1 : '0'}` }}>
					{index <= (6 - generateColumnSkip(1)) && (
						<span>{schedule.day.toUpperCase()}</span>
					)}
					{schedule?.isToday ? (
						<div>
							<span className={`${styles.date} ${styles.isToday}`}>{schedule.date}</span>
						</div>
					) : (
						<span className={`${styles.date}`}>{schedule.date}</span>
					)}

					{schedule?.events.map((event, index) => (
						<div className="d-flex justify-content-center">
							<span className={styles.event} style={{ 'background-color' : `${event.color}` }}>{event?.name}</span>
						</div>
					))}
				</div>
			))}

			{nextMonthDates().map((day) => (
				<div className={styles.day}>
					<span className={`${styles.date} ${styles.invalid}`}>{day}</span>
				</div>
			))}

    </div>
	)
}

export default Calendar