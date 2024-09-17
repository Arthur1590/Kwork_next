'use client'
import Image from 'next/image'
import React from 'react'
import { useThemeStore } from '../../../store'

export const Era_phone = () => {
	const { theme } = useThemeStore()

	return (
		<>
			<Image
				width={367}
				height={473}
				src={theme === 'dark' ? '/main/phone_dark.png' : '/main/era-phone.png'}
				alt='phone'
				className='main__era-phone'
				data-aos='fade-up'
				data-aos-duration='1200'
				data-aos-once='true'
			/>
		</>
	)
}
