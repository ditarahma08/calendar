import styles from '@/styles/TopBar.module.css'

const TopBar = () => {
	return (
		<div className={`d-flex align-items-center ${styles.topbar}`}>
			<div className={`${styles.hamburger}`}>
				<span styles={`${styles.bar} ${styles.top}`}></span>
				<span styles={`${styles.bar} ${styles.mid}`}></span>
				<span styles={`${styles.bar} ${styles.bot}`}></span>
			</div>

			<h3 className="mx-4">Awesome Calendar</h3>

			<buttton className={`btn`}>Today</buttton>

			<div className={styles.navigation}>
				<button className={`btn`}>&lsaquo;</button>
				<button className={`btn`}>&rsaquo;</button>
			</div>

			<div className={`mx-3 ${styles.month}`}>
				<span><b>February 2023</b></span>
			</div>
		</div>
	)
}

export default TopBar