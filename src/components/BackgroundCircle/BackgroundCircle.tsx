import styles from './BackgroundCircle.module.sass'

interface BackgroundCircleProps {
	width: number
	height: number
	left?: number
	right?: number
	top?: number
	bottom?: number
}

export default function BackgroundCircle({
	width,
	height,
	left,
	right,
	top,
	bottom,
}: BackgroundCircleProps) {
	return <div className={styles.circle} style={{ width, height, left, right, top, bottom }}></div>
}
