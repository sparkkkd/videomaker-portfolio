import { useAppSelector } from './store/hooks'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'

import Sheet from './components/Sheet/Sheet'
import Header from './modules/Header/Header'
import Container from './components/Container/Container'
import Intro from './modules/Intro/Intro'
import Works from './modules/Works/Works'
import Footer from './modules/Footer/Footer'

import bgLarge from './images/bg-large.jpg'
import bgMedium from './images/bg-medium.jpg'
import bgSmall from './images/bg-small.jpg'
import bgXsmall from './images/bg-xsmall.jpg'

import styles from './App.module.sass'
import { useEffect } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'

function App() {
	const { isSheetActive } = useAppSelector((state) => state.userActionSlice)
	const size = useWindowSize()

	useEffect(() => {
		if (size.width! > 1400) {
			document.body.style.backgroundImage = `url(${bgLarge})`
		} else if (size.width! < 1400 && size.width! > 900) {
			document.body.style.backgroundImage = `url(${bgMedium})`
		} else if (size.width! < 900 && size.width! > 500) {
			document.body.style.backgroundImage = `url(${bgSmall})`
		} else {
			document.body.style.backgroundImage = `url(${bgXsmall})`
		}
	}, [size])

	return (
		<>
			{/* Start Sheet */}
			<AnimatePresence>{isSheetActive && <Sheet />}</AnimatePresence>
			{/* End Sheet */}

			{/* Start Noise */}
			{/* <div className={styles.overlay} style={{ backgroundImage: `url(${backgroundNoise})` }}></div> */}
			{/* End Noise */}

			{/* Start toast */}
			<Toaster richColors toastOptions={{ className: styles.toast }} />
			{/* End toast */}

			{/* Start modules */}
			<main className={styles.main}>
				<Container>
					<Header />
					<Intro />
					<Works />
					<Footer />
				</Container>
			</main>
			{/* End modules */}
		</>
	)
}

export default App
