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
		video: 'https://www.youtube.com/watch?v=a3BTjminIZ8',
		light: light_1,
	},
	{
		id: v4(),
		video: 'https://www.youtube.com/watch?v=v-Z23Lv55gc',
		light: light_2,
	},
	{
		id: v4(),
		video: 'https://www.youtube.com/shorts/aQqZGipssiE',
		light: light_3,
	},
	{
		id: v4(),
		video: 'https://www.youtube.com/shorts/U1N7eT6vFfg',
		light: light_4,
	},
]
