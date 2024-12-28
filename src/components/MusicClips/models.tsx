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
		video: 'https://kinescope.io/mUAxDTSVHLeGz5RJixm3FZ',
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
		video: 'https://kinescope.io/xcJYZjkV2tsQc18pXNqHYa',
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
		video: 'https://kinescope.io/ffgQWMG8GRkfEGHsEa764s',
		info: [
			{ id: v4(), icon: <CameraIcon />, text: 'Режиссура' },
			{ id: v4(), icon: <EditIcon />, text: 'Монтаж' },
			{ id: v4(), icon: <PaletteIcon />, text: 'Цветкоррекция' },
		],
		light: light_3,
	},
]
