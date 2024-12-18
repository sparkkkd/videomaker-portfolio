import { v4 } from 'uuid'

import CameraIcon from '../../images/icons/camera-white.svg?react'
import EditIcon from '../../images/icons/edit.svg?react'
import PaletteIcon from '../../images/icons/palette.svg?react'

import light_1 from '../../images/thumbs/music-light-1.jpg'
import light_2 from '../../images/thumbs/music-light-2.jpg'
import light_3 from '../../images/thumbs/music-light-3.jpg'

export interface IVideoInfo {
	id: string
	icon: React.ReactNode
	text: string
}

export interface IMusicClips {
	id: string
	title: string
	video: string
	info: IVideoInfo[]
	light: string
}

export const MUSIC_CLIPS: IMusicClips[] = [
	{
		id: v4(),
		title: 'KEYRARI - 11:59PM',
		video: 'https://youtu.be/V8usMS09bXY',
		info: [
			{ id: v4(), icon: <CameraIcon />, text: 'Съемка и режиссура' },
			{ id: v4(), icon: <EditIcon />, text: 'Монтаж' },
			{ id: v4(), icon: <PaletteIcon />, text: 'Цветкоррекция' },
		],
		light: light_1,
	},

	{
		id: v4(),
		title: '69R - Drama',
		video: 'https://youtu.be/MjegK_ibkos?si=gvSL102LM0hwgW17',
		info: [
			{ id: v4(), icon: <CameraIcon />, text: 'Съемка и режиссура' },
			{ id: v4(), icon: <EditIcon />, text: 'Монтаж' },
			{ id: v4(), icon: <PaletteIcon />, text: 'Цветкоррекция' },
		],
		light: light_2,
	},

	{
		id: v4(),
		title: '69R - Blago',
		video: 'https://youtu.be/HpDo_9WQm7I?si=DQJju8-Zzn3LtgZk',
		info: [
			{ id: v4(), icon: <CameraIcon />, text: 'Режиссура' },
			{ id: v4(), icon: <EditIcon />, text: 'Монтаж' },
			{ id: v4(), icon: <PaletteIcon />, text: 'Цветкоррекция' },
		],
		light: light_3,
	},
]
