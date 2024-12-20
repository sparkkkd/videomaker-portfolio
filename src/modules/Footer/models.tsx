import { v4 } from 'uuid'

import EmailIcon from '../../images/icons/contacts/email.svg?react'
import TelegramIcon from '../../images/icons/contacts/telegram.svg?react'
import BehanceIcon from '../../images/icons/contacts/behance.svg?react'
import { GoArrowUpRight } from 'react-icons/go'

export interface IContact {
	id: string
	icon: React.ReactNode
	title: string
	link: string
	target: string
}

export interface IAbout {
	id: string
	title: string
	link: string
	icon: React.ReactNode | null
	target: string
}

export const ABOUT: IAbout[] = [
	{ id: v4(), title: 'Кейсы', link: '#music', icon: null, target: '_self' },
	{
		id: v4(),
		title: 'Мое резюме',
		link: 'https://ryazan.hh.ru/resume/2635b85aff0cdb081f0039ed1f6d3946504669',
		icon: <GoArrowUpRight />,
		target: '_blank',
	},
]

export const CONTACTS: IContact[] = [
	{
		id: v4(),
		icon: <EmailIcon />,
		title: 'E-mail',
		link: 'mailto:d13dimon37@yandex.ru',
		target: '_self',
	},

	{
		id: v4(),
		icon: <TelegramIcon />,
		title: 'Telegram',
		link: 'https://t.me/dm1017y',
		target: '_blank',
	},
	{
		id: v4(),
		icon: <BehanceIcon />,
		title: 'Behance',
		link: 'https://behance.net/dm1017y',
		target: '_blank',
	},
]
