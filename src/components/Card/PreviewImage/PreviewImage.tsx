import Overlay from '../../Overlay/Overlay'
import PlayIcon from '../../PlayIcon/PlayIcon'
import styles from './PreviewImage.module.sass'

interface PreviewImageProps {
	img: string
	className?: string
	iconSize: 'small' | 'medium' | 'large'
	onClick: () => void
}

export default function PreviewImage({ img, className, iconSize, onClick }: PreviewImageProps) {
	return (
		<div
			style={{ backgroundImage: `url(${img})` }}
			className={`${styles.preview} ${className && className}`}
			onClick={onClick}
		>
			<Overlay />
			<PlayIcon size={iconSize} />
		</div>
	)
}
