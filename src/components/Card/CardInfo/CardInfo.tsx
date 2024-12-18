import styles from './CardInfo.module.sass'

interface CardInfoProps {
	text: string
	icon: React.ReactNode
	className?: string
}

export default function CardInfo({ text, icon, className }: CardInfoProps) {
	return (
		<div className={`${styles.info} ${className}`}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.text}>{text}</div>
		</div>
	)
}
