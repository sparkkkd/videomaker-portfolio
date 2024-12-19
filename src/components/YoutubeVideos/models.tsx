import { v4 } from 'uuid'

import light_1 from '../../images/thumbs/youtube-video-light-1.jpg'
import light_2 from '../../images/thumbs/youtube-video-light-2.jpg'

import FolderIcon from '../../images/icons/folder.svg?react'
import PaletteIcon from '../../images/icons/palette.svg?react'
import CameraIcon from '../../images/icons/camera-white.svg?react'
import EditIcon from '../../images/icons/edit.svg?react'
import LightIcon from '../../images/icons/light.svg?react'

export interface IYoutubeVideo {
	id: string
	video: string
	light: string
	title: React.ReactNode
	info: IVideoInfo[]
}

interface IVideoInfo {
	id: string
	icon: React.ReactNode
	text: string
}

export const YOUTUBE_VIDEOS: IYoutubeVideo[] = [
	{
		id: v4(),
		video: 'https://youtu.be/a56nKt-ON8Y',
		light: light_1,
		title: (
			<>
				Короткометражный фильм
				<br />
				«Теория цвета»
			</>
		),
		info: [
			{
				id: v4(),
				icon: <FolderIcon />,
				text: 'Сценарий',
			},
			{
				id: v4(),
				icon: <EditIcon />,
				text: 'Монтаж',
			},
			{
				id: v4(),
				icon: <CameraIcon />,
				text: 'Режиссура',
			},
			{
				id: v4(),
				icon: <PaletteIcon />,
				text: 'Цветкоррекция',
			},
		],
	},
	{
		id: v4(),
		video: 'https://youtu.be/lTZUhbESXCU',
		light: light_2,
		title: (
			<>
				Hamster Kombat —<br />
				История провала
			</>
		),
		info: [
			{
				id: v4(),
				icon: <LightIcon />,
				text: 'Идея',
			},
			{
				id: v4(),
				icon: <EditIcon />,
				text: 'Монтаж',
			},
		],
	},
]
