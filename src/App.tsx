import { useAppSelector } from './store/hooks'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'

import Sheet from './components/Sheet/Sheet'
import Header from './modules/Header/Header'
import Container from './components/Container/Container'
import Intro from './modules/Intro/Intro'
import Works from './modules/Works/Works'
import Footer from './modules/Footer/Footer'

import backgroundNoise from './images/noise-bg.jpg'
import backgroundImage from './images/bg.jpg'

import styles from './App.module.sass'

function App() {
	const { isSheetActive } = useAppSelector((state) => state.userActionSlice)

	document.body.style.backgroundImage = `url(${backgroundImage})`

	return (
		<>
			{/* Start Sheet */}
			<AnimatePresence>{isSheetActive && <Sheet />}</AnimatePresence>
			{/* End Sheet */}

			{/* Start Noise */}
			<div className={styles.overlay} style={{ backgroundImage: `url(${backgroundNoise})` }}></div>
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
