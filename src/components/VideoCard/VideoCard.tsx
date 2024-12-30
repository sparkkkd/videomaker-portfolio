import { useState } from 'react'

import { IVideoInfo } from '../MusicClips/models'

import CardTitle from '../Card/CardTitle/CardTitle'
import CardInfo from '../Card/CardInfo/CardInfo'
import PreviewImage from '../Card/PreviewImage/PreviewImage'
import VideoPopup from '../Popup/VideoPopup/VideoPopup'
import PopupContent from '../Popup/PopupContent/PopupContent'

import styles from './VideoCard.module.sass'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import { AnimatePresence } from 'framer-motion'

interface VideoCardProps {
	video: string
	title: string
	info: IVideoInfo[]
	playSize: 'small' | 'medium' | 'large'
	light: string
}

export default function VideoCard({ video, title, info, playSize, light }: VideoCardProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useDisableScroll(isOpen)

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<VideoPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
						<PopupContent video={video} onClose={() => setIsOpen(false)} />
					</VideoPopup>
				)}
			</AnimatePresence>

			<div className={styles.card}>
				<PreviewImage
					img={light}
					className={styles.preview}
					iconSize={playSize}
					onClick={() => setIsOpen(true)}
				/>

				<div>
					<CardTitle>{title}</CardTitle>
					<div className={styles.info}>
						{info.map(({ id, icon, text }) => (
							<CardInfo key={id} icon={icon} text={text} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
