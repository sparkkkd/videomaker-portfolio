import { v4 } from 'uuid'

import light_1 from '../../images/thumbs/promo-light-1.jpg'
import light_2 from '../../images/thumbs/promo-light-2.jpg'

import LightIcon from '../../images/icons/light.svg?react'
import EditIcon from '../../images/icons/edit.svg?react'
import CameraIcon from '../../images/icons/camera-white.svg?react'
import PaletteIcon from '../../images/icons/palette.svg?react'

export interface IPromoVideo {
	id: string
	title: string
	video: string
	light: string
	isReady: boolean
	info: IPromoVideoInfo[]
}

interface IPromoVideoInfo {
	id: string
	icon: React.ReactNode
	text: string
}

export const PROMO_VIDEOS: IPromoVideo[] = [
	{
		id: v4(),
		title: 'RUSALE Promo Video',
		video: 'https://vimeo.com/880628581',
		light: light_1,
		isReady: true,
		info: [
			{ id: v4(), icon: <LightIcon />, text: 'Идея' },
			{ id: v4(), icon: <EditIcon />, text: 'Монтаж' },
		],
	},
	{
		id: v4(),
		title: 'Colizeum «Game is On» ',
		video: '/',
		light: light_2,
		isReady: false,
		info: [
			{ id: v4(), icon: <CameraIcon />, text: 'Режиссура' },
			{ id: v4(), icon: <EditIcon />, text: 'Монтаж' },
			{ id: v4(), icon: <PaletteIcon />, text: 'Цветкоррекция' },
		],
	},
]
