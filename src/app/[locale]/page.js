'use client'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
	Era,
	Get_started,
	How,
	Intro,
	Invest,
	Levels,
	Faq,
} from '../components/shared/index'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true })
	}, [])

	return (
		<>
			<Intro />

			<Era />

			<How />

			<Levels />

			<Get_started />

			<Invest />

			<Faq />
		</>
	)
}
