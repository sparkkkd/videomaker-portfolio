import styles from './App.module.sass'

import backgroundNoise from './images/noise-bg.jpg'
import Header from './modules/Header/Header'
import Sheet from './components/Sheet/Sheet'
import { useAppSelector } from './store/hooks'
import { AnimatePresence } from 'framer-motion'
import Intro from './modules/Intro/Intro'
import Container from './components/Container/Container'
// import { AnimatePresence } from 'framer-motion'

function App() {
	const { isSheetActive } = useAppSelector((state) => state.userActionSlice)

	return (
		<>
			<AnimatePresence>{isSheetActive && <Sheet />}</AnimatePresence>

			<main className={styles.main}>
				{/* Start Noise */}
				<div
					className={styles.overlay}
					style={{ backgroundImage: `url(${backgroundNoise})` }}
				></div>
				{/* End Noise */}

				<Header />

				{/* Modules */}
				<Container>
					<Intro />
				</Container>
			</main>
		</>
	)
}

export default App
