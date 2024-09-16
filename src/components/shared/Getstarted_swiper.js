import React from 'react'
import Image from 'next/image'
import { useThemeStore } from '../../store'

const data = [
	{
		title: 'Top up your balance',
		alt: 'balance',
		dark: '/main/Card_finance.png',
		light: '/main/getstarted-balance.png',
	},
	{
		title: 'Withdraw money',
		alt: 'income',
		dark: '/main/Card_finance-1.png',
		light: '/main/getstarted-income.png',
	},
]
export const Getstarted_swiper = () => {
	const { theme } = useThemeStore()

	return (
		<div className='swiper getstarted-swiper'>
			<div className='swiper-wrapper'>
				{data &&
					data.map(item => (
						<div className='swiper-slide' key={item.title}>
							<div className='getstated__big-content__item'>
								<div className='getstarted__image-wrapper'>
									<Image
										key={item.alt}
										width={280}
										height={280}
										src={theme === 'dark' ? item.dark : item.light}
										alt={item.alt}
									/>
								</div>
								<a href='#' className='btn btn-blue btn-none'>
									{item.title}
								</a>
							</div>
						</div>
					))}

				{/* <div className='swiper-slide'>
					<div className='getstated__big-content__item'>
						<div className='getstarted__image-wrapper'>
							<Getstarted_theme_img />
						</div>
						<a href='' className='btn btn-blue btn-none'>
						Withdraw money
						</a>
					</div>
				</div> */}
			</div>
		</div>
	)
}
