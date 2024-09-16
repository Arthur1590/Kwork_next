'use client'
import Image from 'next/image'
import React from 'react'
import { useThemeStore } from '../../store'

export const Phones_img = () => {
	const { theme } = useThemeStore()
	return (
		<Image width={820} height={821} src={theme === 'dark' ? '/main/phones_dark.png' : '/main/mobile-phones.png'} alt='phones' />
	)
}
