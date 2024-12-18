import styles from './CardTitle.module.sass'

interface CardTitleProps {
	children: React.ReactNode
	className?: string
}

export default function CardTitle({ children, className }: CardTitleProps) {
	return <h4 className={`${styles.title} ${className}`}>{children}</h4>
}
