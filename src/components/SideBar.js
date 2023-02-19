import styles from '@/styles/SideBar.module.css'

const SideBar = () => {
	return (
		<div className={`ps-2 pe-0 ${styles.sidebar}`}>
			<div className={`d-flex justify-content-between align-items-center`}>
				<span>My Calendar</span>
				<button className={`btn`}>+</button>
				<button className={`btn`}>&lsaquo;</button>
			</div>
		</div>
	)
}

export default SideBar;