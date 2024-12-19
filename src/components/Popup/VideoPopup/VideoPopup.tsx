import { motion, Variants } from 'framer-motion'
import { createPortal } from 'react-dom'

import styles from './VideoPopup.module.sass'

interface VideoPopupProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export default function VideoPopup({ children, isOpen, onClose }: VideoPopupProps) {
	if (!isOpen) return null

	const popupVariants: Variants = {
		initial: {
			opacity: 0,
		},

		animate: {
			opacity: 1,
		},

		exit: {
			opacity: 0,
		},
	}

	return createPortal(
		<motion.div
			variants={popupVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			className={styles.popup}
		>
			<div className={styles.overlay} onClick={onClose}></div>

			{children}
		</motion.div>,
		document.body
	)
}
