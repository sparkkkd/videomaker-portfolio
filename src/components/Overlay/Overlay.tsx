import styles from './Overlay.module.sass'

interface OverlayProps {
	onClose?: () => void
	className?: string
}

export default function Overlay({ onClose, className }: OverlayProps) {
	return <div className={`${styles.overlay} ${className && className}`} onClick={onClose}></div>
}
