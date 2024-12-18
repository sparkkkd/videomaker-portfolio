import ReactPlayer from 'react-player'

import PlayIcon from '../PlayIcon/PlayIcon'

import styles from './Player.module.sass'
import { useWindowSize } from '@uidotdev/usehooks'

interface PlayerProps {
	video?: string
	width?: string | number
	height?: string | number
	playSize: 'small' | 'medium' | 'large'
	light: string
	style?: string
	onClick?: () => void
}

export default function Player({
	video,
	width,
	height,
	playSize,
	light,
	style,
	onClick,
}: PlayerProps) {
	const size = useWindowSize()

	return (
		<div className={`${styles.wrapper} ${style}`}>
			<ReactPlayer
				className={styles.player}
				width={width ? width : '100%'}
				height={height ? height : size.width! > 877 ? 600 : size.width! > 500 ? 400 : 200}
				url={video}
				controls
				playIcon={<PlayIcon size={playSize} onClick={onClick} />}
				light={light}
			/>
		</div>
	)
}
