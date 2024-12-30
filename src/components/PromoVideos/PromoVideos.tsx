import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

import { IPromoVideo, PROMO_VIDEOS } from './models'

import { useDisableScroll } from '../../hooks/useDisableScroll'

import Overlay from '../Overlay/Overlay'
import VideoPopup from '../Popup/VideoPopup/VideoPopup'
import PopupContent from '../Popup/PopupContent/PopupContent'
import CardTitle from '../Card/CardTitle/CardTitle'
import CardInfo from '../Card/CardInfo/CardInfo'
import SectionTitle from '../SectionTitle/SectionTitle'
import PreviewImage from '../Card/PreviewImage/PreviewImage'

import styles from './PromoVideos.module.sass'

export default function PromoVideos() {
	return (
		<div className={styles.wrapper} id='promo'>
			<SectionTitle>Рекламные ролики</SectionTitle>

			<div className={styles.videos}>
				{PROMO_VIDEOS.map((video) => (
					<PromoVideo key={video.id} {...video} />
				))}
			</div>
		</div>
	)
}

function PromoVideo({ title, video, light, isReady, info }: IPromoVideo) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useDisableScroll(isOpen)

	const handleOpenPopup = () => {
		if (isReady) {
			setIsOpen(true)
		} else {
			toast.error('Видео еще не готово')
		}
	}

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<VideoPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
						<PopupContent video={video} onClose={() => setIsOpen(false)} />
					</VideoPopup>
				)}
			</AnimatePresence>

			<div className={styles.video}>
				<div className={styles.imageWrapper} onClick={handleOpenPopup}>
					<Overlay className={styles.overlay} />
					<PreviewImage
						img={light}
						iconSize='medium'
						className={styles.preview}
						onClick={() => setIsOpen(false)}
						isReady={isReady}
					/>
					{!isReady && <span className={styles.notReady}>Coming soon</span>}
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
