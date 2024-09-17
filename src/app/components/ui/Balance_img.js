'use client'
import React from 'react'
import { useThemeStore } from '../../../store'
import Image from 'next/image'

export const Balance_img = () => {
	const { theme } = useThemeStore()
	return (
		<>
			<div className='getstated__big-content__item'>
				<div className='getstarted__image-wrapper'>
					<Image
						width={400}
						height={400}
						src={
							theme === 'dark'
								? '/main/Card_finance.png'
								: '/main/getstarted-balance.png'
						}
						alt='balance'
					/>
				</div>
				<a href='' className='btn btn-blue btn-none'>
					Top up your balance
				</a>
			</div>
			<div className='getstated__big-content__item'>
				<div className='getstarted__image-wrapper'>
					<Image
						width={400}
						height={400}
						src={
							theme === 'dark'
								? '/main/Card_finance-1.png'
								: '/main/getstarted-income.png'
						}
						alt='income'
					/>
				</div>
				<a href='' className='btn btn-blue btn-none'>
					Withdraw money
				</a>
			</div>
			<div className='getstarted__big-content__image'>
				<Image
					width={400}
					height={400}
					src={
						theme === 'dark'
							? '/main/investment_dark.png'
							: '/main/getstarted-stats.png'
					}
					alt='stats'
				/>
			</div>
		</>
	)
}
