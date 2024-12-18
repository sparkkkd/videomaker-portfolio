import styles from './PlayIcon.module.sass'

import PlayIco from '../../images/icons/play.svg?react'

interface PlayIconProps {
	size: 'small' | 'medium' | 'large'
	onClick?: () => void
}

export default function PlayIcon({ size, onClick }: PlayIconProps) {
	return (
		<button
			className={`${styles.button} ${
				size === 'small' ? styles.small : size === 'medium' ? styles.medium : styles.large
			}`}
			onClick={onClick}
		>
			<PlayIco className={styles.icon} />
		</button>
	)
}
