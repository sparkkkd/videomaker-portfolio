import styles from './PlayIcon.module.sass'

import PlayIco from '../../images/icons/play.svg?react'

export default function PlayIcon() {
	return (
		<button className={styles.button}>
			<PlayIco className={styles.icon} />
		</button>
	)
}
