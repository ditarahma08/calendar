import styles from '@/styles/SideBar.module.css'

const SideBar = ({schedules}) => {
	const generateEvents = () => {
		let events = []

		schedules.map((schedule) => {
			if (schedule.events.length > 0) {
				schedule.events.map((event) => events.push(event))
			}
		})

		return events
	}

	return (
		<div className={`ps-2 pe-0 ${styles.sidebar}`}>
			<div className={`d-flex justify-content-between align-items-center mb-2`}>
				<span>My Calendar</span>
				<button className={`btn`}>+</button>
				<button className={`btn`}>&lsaquo;</button>
			</div>

			{generateEvents().map((event, index) => (
				<div class="form-check my-2">
				  <input class="form-check-input" type="checkbox" value="" />
				  <label class="form-check-label">
				    {event.name}
				  </label>
				</div>
			))}
		</div>
	)
}

export default SideBar;