import { useRef, useState } from 'react'
import Player from '@kinescope/react-kinescope-player'
import { AnimatePresence, motion } from 'framer-motion'

import CommentCard from '../../components/CommentCard/CommentCard'

import RecordIcon from '../../images/icons/record.svg?react'
import CameraIcon from '../../images/icons/camera.svg?react'

import previewLight from '../../images/thumbs/intro-thumb.jpg'

import styles from './Intro.module.sass'
import PlayIcon from '../../components/PlayIcon/PlayIcon'

export default function Intro() {
	const [isComment, setIsComment] = useState<boolean>(true)
	const playeRef = useRef<Player>(null)

	const handlePlayVideo = () => {
		setIsComment(false)
		playeRef.current?.play()
	}

	return (
		<section className={styles.intro}>
			<h1 className={styles.title}>Создаю видео разного формата</h1>
			<p className={styles.subtitle}>От рилсов и ютуб роликов до короткометражных фильмов</p>
			<div className={styles.video}>
				{isComment && (
					<>
						<CommentCard
							className={`${styles.commentLeft} ${styles.comment}`}
							icon={<RecordIcon />}
						>
							На проектах выступаю режиссером, колористом или монтажером
						</CommentCard>
						<CommentCard
							className={`${styles.commentRight} ${styles.comment}`}
							icon={<CameraIcon />}
						>
							Мой шоурилл <br /> за 2024 год
						</CommentCard>
					</>
				)}

				<div className={styles.player} onClick={handlePlayVideo}>
					<AnimatePresence>
						{isComment && (
							<motion.div
								className={styles.preview}
								style={{ backgroundImage: `url(${previewLight})` }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<PlayIcon size='medium' onClick={handlePlayVideo} />
							</motion.div>
						)}
					</AnimatePresence>

					<Player
						style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}
						videoId={'63hdF7GUykRdTk8jCF5R9j'}
						ref={playeRef}
					/>
				</div>
			</div>
		</section>
	)
}
