import { IYoutubeVideo, YOUTUBE_VIDEOS } from './models'

import CardTitle from '../Card/CardTitle/CardTitle'
import Player from '../Player/Player'
import SectionTitle from '../SectionTitle/SectionTitle'
import CardInfo from '../Card/CardInfo/CardInfo'

import { useState } from 'react'

import styles from './YoutubeVideo.module.sass'

export default function YoutubeVideos() {
	return (
		<div className={styles.wrapper}>
			<SectionTitle>Короткометражный фильм и Youtube видео</SectionTitle>

			<div className={styles.videos}>
				{YOUTUBE_VIDEOS.map((video) => (
					<YoutubeVideo key={video.id} {...video} />
				))}
			</div>
		</div>
	)
}

function YoutubeVideo({ video, light, title, info }: IYoutubeVideo) {
	const [isOverlay, setIsOverlay] = useState<boolean>(true)

	return (
		<div className={styles.video}>
			<div className={styles.playerWrapper} onClick={() => setIsOverlay(false)}>
				{isOverlay && <div className={styles.overlay}></div>}
				<Player
					video={video}
					playSize='medium'
					// height={size.width! > 900 ? 350 : 250}
					height={'100%'}
					width={'100%'}
					light={light}
					style={styles.player}
				/>
			</div>

			<div className={styles.content}>
				<CardTitle className={styles.title}>{title}</CardTitle>

				<div className={styles.infoWrapper}>
					{info.map(({ id, icon, text }) => (
						<CardInfo className={styles.info} key={id} icon={icon} text={text} />
					))}
				</div>
			</div>
		</div>
	)
}
