import Overlay from '../../Overlay/Overlay'
import PlayIcon from '../../PlayIcon/PlayIcon'
import styles from './PreviewImage.module.sass'

interface PreviewImageProps {
	img: string
	className?: string
	iconSize: 'small' | 'medium' | 'large'
	onClick: () => void
	isReady?: boolean
}

export default function PreviewImage({
	img,
	className,
	iconSize,
	onClick,
	isReady = true,
}: PreviewImageProps) {
	return (
		<div
			style={{ backgroundImage: `url(${img})` }}
			className={`${styles.preview} ${className && className}`}
			onClick={onClick}
		>
			<Overlay />

			{isReady && <PlayIcon size={iconSize} />}
		</div>
	)
}
