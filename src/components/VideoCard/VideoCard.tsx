import { useState } from 'react'
import { IVideoInfo } from '../MusicClips/models'
import Player from '../Player/Player'

import styles from './VideoCard.module.sass'

interface VideoCardProps {
	video: string
	title: string
	info: IVideoInfo[]
	playSize: 'small' | 'medium' | 'large'
	light: string
}

export default function VideoCard({ video, title, info, playSize, light }: VideoCardProps) {
	const [isOverlay, setIsOverlay] = useState<boolean>(true)

	return (
		<div className={styles.card}>
			<div className={styles.playerWrapper} onClick={() => setIsOverlay(false)}>
				{isOverlay && <div className={styles.overlay}></div>}

				<Player
					width={'100%'}
					height={250}
					video={video}
					playSize={playSize}
					light={light}
					style={styles.player}
				/>
			</div>

			<div>
				<h4 className={styles.title}>{title}</h4>

				<div className={styles.info}>
					{info.map(({ id, icon, text }) => (
						<div className={styles.infoWrapper} key={id}>
							<div className={styles.icon}>{icon}</div>
							<div className={styles.text}>{text}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
