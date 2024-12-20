import LinkArrow from '../../images/contact-arrow.svg?react'

import { v4 } from 'uuid'

export interface IHeaderNavProps {
	title: string
	link: string
	icon?: React.ReactNode
	id: string
}

export const NAV_LINKS: IHeaderNavProps[] = [
	{ title: 'Reels', link: '#reels', id: v4() },
	{ title: 'Реклама', link: '#promo', id: v4() },
	{ title: 'YouTube', link: '#films', id: v4() },
	{ title: 'К/м фильмы', link: '#films', id: v4() },
	{ title: 'Клипы', link: '#music', id: v4() },
	{ title: 'Связаться со мной', link: '#contacts', icon: <LinkArrow />, id: v4() },
]
