import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useDisableScroll } from '../../hooks/useDisableScroll'

import { IYoutubeVideo, YOUTUBE_VIDEOS } from './models'

import CardTitle from '../Card/CardTitle/CardTitle'
import SectionTitle from '../SectionTitle/SectionTitle'
import CardInfo from '../Card/CardInfo/CardInfo'
import PreviewImage from '../Card/PreviewImage/PreviewImage'
import Overlay from '../Overlay/Overlay'
import VideoPopup from '../VideoPopup/VideoPopup'
import PopupContent from '../PopupContent/PopupContent'

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
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useDisableScroll(isOpen)

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<VideoPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
						<PopupContent
							video={video}
							title={title}
							light={light}
							onClose={() => setIsOpen(false)}
						/>
					</VideoPopup>
				)}
			</AnimatePresence>

			<div className={styles.video}>
				<div className={styles.playerWrapper} onClick={() => setIsOpen(true)}>
					<Overlay className={styles.overlay} />
					<PreviewImage
						img={light}
						iconSize='medium'
						className={styles.preview}
						onClick={() => setIsOpen(false)}
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
		</>
	)
}
