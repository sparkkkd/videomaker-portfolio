import styles from './Header.module.sass'

import Logo from '../../images/logo.svg?react'
import Container from '../../components/Container/Container'

import { NAV_LINKS } from './models'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import { toggleSheet } from '../../store/slices/userActionSlice'

export default function Header() {
	const dispatch = useAppDispatch()

	const handleToggleSheet = () => {
		dispatch(toggleSheet())
	}

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.logo}>
						<Logo />
					</div>

					<ul className={styles.list}>
						{NAV_LINKS.map(({ title, link, icon, id }) => (
							<li className={styles.item} key={id}>
								<Link to={link}>
									{title} {icon && <span className={styles.icon}>{icon}</span>}
								</Link>
							</li>
						))}
					</ul>

					<div className={styles.burger} onClick={() => handleToggleSheet()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</Container>
		</header>
	)
}
