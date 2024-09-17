import Image from 'next/image'
import React from 'react'
import { Levels_swiper } from './Levels_swiper'

export const Levels = () => {
	return (
		<section className='main__levels'>
			<Image
				src='/main/levels-bg.png'
				alt='Bg'
				width={1920}
				height={1920}
				className='main__levels-bg'
				data-aos='fade-up'
				data-aos-duration='2500'
				data-aos-once='true'
			/>
			<div className='main__levels-field'></div>
			<div className='site-holder'>
				<h2
					className='section-title'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					System of Personalized <b>Investment Levels.</b>
				</h2>
				<p
					className='section-description'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					Each level offers different opportunities for capital growth depending
					on your goals and is based on your individual investment experience
					and preferences.
				</p>
				{/* Swiper */}

				<Levels_swiper />
			</div>
		</section>
	)
}
