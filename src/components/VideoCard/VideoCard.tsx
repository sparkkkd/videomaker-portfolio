import { useState } from 'react'
import { IVideoInfo } from '../MusicClips/models'
import Player from '../Player/Player'

import styles from './VideoCard.module.sass'
import CardTitle from '../Card/CardTitle/CardTitle'
import CardInfo from '../Card/CardInfo/CardInfo'

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
				<CardTitle>{title}</CardTitle>
				<div className={styles.info}>
					{info.map(({ id, icon, text }) => (
						<CardInfo key={id} icon={icon} text={text} />
					))}
				</div>
			</div>
		</div>
	)
}
