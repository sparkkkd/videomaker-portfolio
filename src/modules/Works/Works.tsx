import MusicClips from '../../components/MusicClips/MusicClips'
import YoutubeReels from '../../components/YoutubeReels/YoutubeReels'

import styles from './Works.module.sass'

export default function Works() {
	return (
		<section className={styles.works}>
			<MusicClips />
			<YoutubeReels />
		</section>
	)
}
