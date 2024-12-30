import { IoCloseOutline } from 'react-icons/io5'

import styles from './PopupContent.module.sass'

interface PopupContentProps {
	video: string
	onClose: () => void
	isVertical?: boolean
}

export default function PopupContent({ video, onClose, isVertical = false }: PopupContentProps) {
	return (
		<div className={styles.content}>
			<IoCloseOutline className={styles.close} onClick={onClose} />
			<div className={`${!isVertical && styles.playerWrapper} ${isVertical && styles.vertical}`}>
				<div>
					<iframe
						src={video}
						allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;'
						allowFullScreen={true}
						className={styles.player}
					></iframe>
				</div>
			</div>
		</div>
	)
}
