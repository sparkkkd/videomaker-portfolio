import { v4 } from 'uuid'

import light_1 from '../../images/thumbs/youtube-reels-light-1.jpg'
import light_2 from '../../images/thumbs/youtube-reels-light-2.jpg'
import light_3 from '../../images/thumbs/youtube-reels-light-3.jpg'
import light_4 from '../../images/thumbs/youtube-reels-light-4.jpg'

interface IYoutubeReels {
	id: string
	video: string
	light: string
}

export const YOUTUBE_REELS: IYoutubeReels[] = [
	{
		id: v4(),
		video: 'https://kinescope.io/azVKZTJK1XAbCTZhxFr7z3',
		light: light_1,
	},
	{
		id: v4(),
		video: 'https://kinescope.io/roy4NHaJSaWef2FBuZC2r6',
		light: light_2,
	},
	{
		id: v4(),
		video: 'https://kinescope.io/4L6SYDkoR2bKNYmUeSw7M6',
		light: light_3,
	},
	{
		id: v4(),
		video: 'https://kinescope.io/5tPtc78rkT5hTbVUk6tn19',
		light: light_4,
	},
]
