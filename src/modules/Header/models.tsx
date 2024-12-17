import LinkArrow from '../../images/contact-arrow.svg?react'

import { v4 } from 'uuid'

export interface IHeaderNavProps {
	title: string
	link: string
	icon?: React.ReactNode
	id: string
}

export const NAV_LINKS: IHeaderNavProps[] = [
	{ title: 'Reels', link: '/', id: v4() },
	{ title: 'Реклама', link: '/', id: v4() },
	{ title: 'YouTube', link: '/', id: v4() },
	{ title: 'К/м фильмы', link: '/', id: v4() },
	{ title: 'Клипы', link: '/', id: v4() },
	{ title: 'Связаться со мной', link: '/', icon: <LinkArrow />, id: v4() },
]
