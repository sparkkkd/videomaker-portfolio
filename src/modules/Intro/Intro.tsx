import CommentCard from '../../components/CommentCard/CommentCard'
import Player from '../../components/Player/Player'

import RecordIcon from '../../images/icons/record.svg?react'
import CameraIcon from '../../images/icons/camera.svg?react'

import { useState } from 'react'

import styles from './Intro.module.sass'

export default function Intro() {
	const [isComment, setIsComment] = useState<boolean>(true)
	const [isOverlay, setIsOverlay] = useState<boolean>(true)

	return (
		<section className={styles.intro}>
			<h1 className={styles.title}>Создаю видео разного формата</h1>
			<p className={styles.subtitle}>От рилсов и ютуб роликов до короткометражных фильмов</p>
			<div className={styles.video} onClick={() => setIsOverlay(false)}>
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

				{isOverlay && <div className={styles.overlay}></div>}

				<Player
					light='https://i.vimeocdn.com/video/1961166623-c7b04bc60a2137037565f762578487611afae73ec8ab577b74630e3b457bc361-d_1920x1080'
					video='https://vimeo.com/1038890292'
					playSize='large'
					style={styles.player}
					onClick={() => setIsComment(false)}
				/>
			</div>
		</section>
	)
}
