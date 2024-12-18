import SectionTitle from '../SectionTitle/SectionTitle'
import VideoCard from '../VideoCard/VideoCard'

import { MUSIC_CLIPS } from './models'

import styles from './MusicClips.module.sass'

export default function MusicClips() {
	return (
		<div className={styles.music}>
			<SectionTitle>Музыкальные клипы</SectionTitle>

			<div className={styles.videoWrapper}>
				{MUSIC_CLIPS.map(({ id, title, video, info, light }) => (
					<VideoCard
						key={id}
						video={video}
						title={title}
						info={info}
						playSize={'small'}
						light={light}
					/>
				))}
			</div>
		</div>
	)
}
