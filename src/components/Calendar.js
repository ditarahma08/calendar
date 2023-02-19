import styles from '@/styles/Calendar.module.css'
import { days } from '../utils/constant'
import { useState, useEffect } from 'react'

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1

const Calendar = () => {
	const [schedules, setSchedules] = useState([])

	const checkToday = (date) => {
		const today = new Date().getDate()
		return date == today
	}

	const generateColumnSkip = (date) => {
		const newDate = new Date(`${year}-${month}-${date}`)
		return newDate.getDay()
	}

	const generateDay = (date) => {
		const newDate = new Date(`${year}-${month}-${date}`)
		return days[newDate.getDay()]
	}

	const daysInMonth = (month, year) => {
		return new Date(year, month, 0).getDate()
	}

	const assignSchedules = () => {
		let newSchedules = []

		Array.from(Array(daysInMonth(month, year))).map((day, index) => {
			newSchedules.push({
				date: index + 1,
				day: generateDay(index + 1),
				events: [],
				isToday: checkToday(index + 1)
			})
		})

		setSchedules(newSchedules)
	}

	const nextMonthDates = () => {
		const dateLength = (generateColumnSkip(1) + 1) - (daysInMonth(month, year) % 7)
		let prevDates = []
		Array.from(Array(dateLength)).map((day, index) => prevDates.push(index + 1))
		return prevDates
	}

	useEffect(() => {
		assignSchedules()
	}, [])

	return (
		<div className={`${styles.calendar}`}>
			{days.map((day, index) => index < generateColumnSkip(1) && (
				<div className={styles.day}>
					<span>{day.toUpperCase()}</span>
				</div>
			))}

			{schedules.map((schedule, index) => (
				<div className={`${styles.day}`} style={{ 'grid-column-start': `${index === 0 ? generateColumnSkip(1) + 1 : '0'}` }}>
					{index <= (6 - generateColumnSkip(1)) && (
						<span>{schedule.day.toUpperCase()}</span>
					)}
					<span className={`${styles.date} ${schedule.isToday ? styles.today : ''}`}>{schedule.date}</span>
				</div>
			))}

			{nextMonthDates().map((day) => (
				<div className={styles.day}>
					<span className={`${styles.date}`}>{day}</span>
				</div>
			))}

    </div>
	)
}

export default Calendar