import Logo from '../../images/logo.svg?react'

import { ABOUT, CONTACTS } from './models'
import cn from 'classnames'

import styles from './Footer.module.sass'

export default function Footer() {
	return (
		<footer className={styles.footer} id='contacts'>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Logo />
				</div>

				<div className={styles.about}>
					{ABOUT.map(({ id, title, link, icon, target }) => (
						<div className={styles.item} key={id}>
							<a href={link} target={target}>
								{title}
								{icon && <span className={cn(styles.icon, styles.arrowIcon)}>{icon}</span>}
							</a>
						</div>
					))}
				</div>
				<div className={styles.contacts}>
					{CONTACTS.map(({ id, icon, title, link, target }) => (
						<div className={styles.item} key={id}>
							<a href={link} target={target}>
								<span className={styles.icon}>{icon}</span>
								{title}
							</a>
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}
