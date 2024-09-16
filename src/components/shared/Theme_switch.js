'use client'
import { useState, useEffect } from 'react'

export default function Theme_switch() {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'dark'
		setTheme(savedTheme)
		document.documentElement.classList.toggle(
			'dark-theme',
			savedTheme === 'dark'
		)
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		document.documentElement.classList.toggle('dark-theme', newTheme === 'dark')
		localStorage.setItem('theme', newTheme)
	}

	return (
		<button onClick={toggleTheme} className='theme-switch'>
			<svg
				className='theme-icon'
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				class='lucide lucide-globe'
			>
				<circle cx='12' cy='12' r='10' />
				<path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
				<path d='M2 12h20' />
			</svg>
		</button>
	)
}
