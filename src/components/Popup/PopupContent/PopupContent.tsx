import { IoCloseOutline } from 'react-icons/io5'

import styles from './PopupContent.module.sass'

interface PopupContentProps {
	video: string
	light: string
	onClose: () => void
}

export default function PopupContent({ video, onClose }: PopupContentProps) {
	return (
		<div className={styles.content}>
			<IoCloseOutline className={styles.close} onClick={onClose} />
			<div className={styles.playerWrapper}>
				<div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
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
