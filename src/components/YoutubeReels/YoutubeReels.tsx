import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import SectionTitle from '../SectionTitle/SectionTitle'
import Overlay from '../Overlay/Overlay'
import PreviewImage from '../Card/PreviewImage/PreviewImage'
import VideoPopup from '../Popup/VideoPopup/VideoPopup'
import PopupContent from '../Popup/PopupContent/PopupContent'

import { YOUTUBE_REELS } from './models'

import styles from './YoutubeReels.module.sass'
import { useDisableScroll } from '../../hooks/useDisableScroll'

export default function YoutubeReels() {
	return (
		<div className={styles.wrapper} id='reels'>
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
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useDisableScroll(isOpen)

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<VideoPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
						<PopupContent video={video} light={light} onClose={() => setIsOpen(false)} />
					</VideoPopup>
				)}
			</AnimatePresence>

			<div className={styles.video} onClick={() => setIsOpen(true)}>
				<Overlay className={styles.overlay} />

				<PreviewImage img={light} iconSize='medium' className={styles.preview} />

				{/* {isOverlay && <div className={styles.overlay}></div>} */}
				{/* <Player video={video} light={light} playSize='medium' style={styles.player} height={'100%'} /> */}
			</div>
		</>
	)
}
