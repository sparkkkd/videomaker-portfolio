import styles from './Header.module.sass'

import Logo from '../../images/logo.svg?react'

import { NAV_LINKS } from './models'
import { useAppDispatch } from '../../store/hooks'
import { toggleSheet } from '../../store/slices/userActionSlice'

export default function Header() {
	const dispatch = useAppDispatch()

	const handleToggleSheet = () => {
		dispatch(toggleSheet())
	}

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Logo />
				</div>

				<ul className={styles.list}>
					{NAV_LINKS.map(({ title, link, icon, id }) => (
						<li className={styles.item} key={id}>
							<a href={link}>
								{title} {icon && <span className={styles.icon}>{icon}</span>}
							</a>
						</li>
					))}
				</ul>

				<div className={styles.burger} onClick={() => handleToggleSheet()}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	)
}
