import styles from './CommentCard.module.sass'

interface CommentCardProps {
	children: React.ReactNode
	icon: React.ReactNode
	className: string
}

export default function CommentCard({ className, icon, children }: CommentCardProps) {
	return (
		<div className={`${styles.card} ${className}`}>
			<div>{icon}</div>
			<p>{children}</p>
		</div>
	)
}
