import ReactPlayer from 'react-player/vimeo'

import PlayIcon from '../PlayIcon/PlayIcon'

import styles from './Player.module.sass'
import { useWindowSize } from '@uidotdev/usehooks'

interface PlayerProps {
	video?: string
}

export default function Player({ video }: PlayerProps) {
	const size = useWindowSize()

	return (
		<div className={styles.wrapper}>
			<ReactPlayer
				className={styles.player}
				width='100%'
				height={size.width! > 877 ? 600 : size.width! > 500 ? 400 : 200}
				url={video}
				controls
				playIcon={<PlayIcon />}
				light='https://i.vimeocdn.com/video/1961166623-c7b04bc60a2137037565f762578487611afae73ec8ab577b74630e3b457bc361-d_1920x1080'
			/>
		</div>
	)
}
