import { useEffect } from 'react'

export function useDisableScroll(option: boolean) {
	useEffect(() => {
		function disableScroll() {
			if (option) document.body.style.overflow = 'hidden'
		}

		function enableScroll() {
			document.body.style.overflow = 'auto'
		}

		disableScroll()

		return enableScroll
	}, [option])
}
