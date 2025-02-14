import MusicClips from '../../components/MusicClips/MusicClips'
import PromoVideos from '../../components/PromoVideos/PromoVideos'
import YoutubeReels from '../../components/YoutubeReels/YoutubeReels'
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideo'

import styles from './Works.module.sass'

export default function Works() {
	return (
		<section className={styles.works}>
			<MusicClips />
			<YoutubeReels />
			<YoutubeVideos />
			<PromoVideos />
		</section>
	)
}
