import { motion, Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../store/hooks'
import { toggleSheet } from '../../store/slices/userActionSlice'
import { NAV_LINKS } from '../../modules/Header/models'

import styles from './Sheet.module.sass'

export default function Sheet() {
	const dispatch = useAppDispatch()

	const handleToggleSheet = () => {
		dispatch(toggleSheet())
	}

	const overlayVariants: Variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.5,
				delayChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	const sheetVariants: Variants = {
		initial: {
			opacity: 0,
			y: 100,
		},

		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
			},
		},

		exit: {
			opacity: 0,
			y: 100,
		},
	}

	return (
		<motion.div
			className={styles.sheet}
			variants={overlayVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			layout
		>
			<motion.div className={styles.overlay} onClick={() => handleToggleSheet()}></motion.div>
			<motion.div className={styles.content} variants={sheetVariants}>
				<nav>
					<ul className={styles.list}>
						{NAV_LINKS.map(({ title, link, icon, id }) => (
							<li className={styles.item} key={id}>
								<Link to={link}>
									{title} {icon && <span>{icon}</span>}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</motion.div>
		</motion.div>
	)
}
