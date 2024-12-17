import CommentCard from '../../components/CommentCard/CommentCard'
import Player from '../../components/Player/Player'

import RecordIcon from '../../images/icons/record.svg?react'
import CameraIcon from '../../images/icons/camera.svg?react'

import styles from './Intro.module.sass'

export default function Intro() {
	return (
		<section className={styles.intro}>
			<h1 className={styles.title}>Создаю видео разного формата</h1>
			<p className={styles.subtitle}>От рилсов и ютуб роликов до короткометражных фильмов</p>
			<div className={styles.video}>
				<CommentCard className={`${styles.commentLeft} ${styles.comment}`} icon={<RecordIcon />}>
					На проектах выступаю режиссером, колористом или монтажером
				</CommentCard>

				<CommentCard className={`${styles.commentRight} ${styles.comment}`} icon={<CameraIcon />}>
					Мой шоурилл <br /> за 2024 год
				</CommentCard>

				<Player video='https://vimeo.com/1038890292' />
			</div>
		</section>
	)
}
