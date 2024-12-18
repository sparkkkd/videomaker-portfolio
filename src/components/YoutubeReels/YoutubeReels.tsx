import { useState } from 'react'

import Player from '../Player/Player'
import SectionTitle from '../SectionTitle/SectionTitle'

import { YOUTUBE_REELS } from './models'

import styles from './YoutubeReels.module.sass'

export default function YoutubeReels() {
	return (
		<div className={styles.wrapper}>
			<SectionTitle>YouTube Reels</SectionTitle>

			<div className={styles.videos}>
				{YOUTUBE_REELS.map((video) => (
					<ReelsVideo key={video.id} {...video} />
				))}
			</div>
		</div>
	)
}

interface ReelsVideoProps {
	video: string
	light: string
}

function ReelsVideo({ video, light }: ReelsVideoProps) {
	const [isOverlay, setIsOverlay] = useState<boolean>(true)

	return (
		<div className={styles.video} onClick={() => setIsOverlay(false)}>
			{isOverlay && <div className={styles.overlay}></div>}
			<Player video={video} light={light} playSize='medium' style={styles.player} height={'100%'} />
		</div>
	)
}
