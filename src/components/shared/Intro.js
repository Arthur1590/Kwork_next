import Image from 'next/image'
import React from 'react'
import { Intro__wave } from '../ui/Intro__wave'
import { Glow } from '../ui/Glow'

export const Intro = () => {
	return (
		<section className='main__intro'>
			<Intro__wave />
			<Glow />
			<div className='site-holder'>
				<div className='main__intro-content'>
					<div className='main__intro-column'>
						<h1
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-once='true'
						>
							Explore new opportunities in financial&nbsp;investing{' '}
							<b>with NextFi token</b>
						</h1>

						<span
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-once='true'
						>
							Modern AI solutions provide reliable tokenomics, sustained growth
							in investments, and ensure the safety of your funds.
						</span>
						<div
							className='main__buttons'
							data-aos='fade-up'
							data-aos-duration='1200'
							data-aos-once='true'
						>
							<a href='' className='btn btn-blue'>
								Sign Up
							</a>
							<a href='' className='btn btn-transparent'>
								Log In
							</a>
						</div>
					</div>
					<div className='main__intro-wrapper'>
						<Image
							width={400}
							height={400}
							src='/main/main-img.png'
							alt=''
							className='main-img'
						/>
					</div>
				</div>
				<div
					className='main__intro-values'
					data-aos='fade-up'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>$65 B</span>
						<span className='main__intro-values-item__name'>
							Investment Volume
						</span>
					</div>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>$350 M</span>
						<span className='main__intro-values-item__name'>
							Payout Volume in 24 Hours
						</span>
					</div>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>+750</span>
						<span className='main__intro-values-item__name'>All Users</span>
					</div>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>+230 K</span>
						<span className='main__intro-values-item__name'>
							Bonus Received
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
