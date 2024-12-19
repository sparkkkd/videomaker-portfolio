import { useState } from 'react'

import Overlay from '../../Overlay/Overlay'
import Player from '../../Player/Player'
import CardTitle from '../../Card/CardTitle/CardTitle'
import { IoCloseOutline } from 'react-icons/io5'

import styles from './PopupContent.module.sass'

interface PopupContentProps {
	title?: string | React.ReactNode
	video: string
	light: string
	onClose: () => void
}

export default function PopupContent({ title, video, light, onClose }: PopupContentProps) {
	const [isOverlay, setIsOverlay] = useState<boolean>(true)

	return (
		<div className={styles.content}>
			<IoCloseOutline className={styles.close} onClick={onClose} />
			<CardTitle className={styles.title}>{title && title}</CardTitle>
			<div className={styles.playerWrapper} onClick={() => setIsOverlay(false)}>
				{isOverlay && <Overlay className={styles.overlay} />}

				<Player
					video={video}
					light={light}
					playSize='medium'
					style={styles.player}
					height={'100%'}
				/>
			</div>
		</div>
	)
}
