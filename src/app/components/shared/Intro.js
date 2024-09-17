import Image from 'next/image'
import React from 'react'
import { Intro__wave } from '../ui/Intro__wave'
import { Glow } from '../ui/Glow'
import { useTranslations } from 'next-intl'

export const Intro = () => {
	const t = useTranslations('intro')

	return (
		<section className='main__intro'>
			<Intro__wave />
			<div className='site-holder'>
				<div className='main__intro-content'>
					<div className='main__intro-column'>
						<h1
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-once='true'
						>
							{t.rich('Explore', {
								b: chunks => <b>{chunks}</b>,
							})}
						</h1>

						<span
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-once='true'
						>
							{t('Modern')}
						</span>
						<div
							className='main__buttons'
							data-aos='fade-up'
							data-aos-duration='1200'
							data-aos-once='true'
						>
							<a href='' className='btn btn-blue'>
								{t('SignUp')}
							</a>
							<a href='' className='btn btn-transparent'>
								{t('LogIn')}
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
							priority
						/>
						<Glow />
					</div>
				</div>
				<div
					className='main__intro-values'
					data-aos='fade-up'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>{t('$65B')}</span>
						<span className='main__intro-values-item__name'>
							{t('Investment')}
						</span>
					</div>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>{t('$350M')}</span>
						<span className='main__intro-values-item__name'>{t('Payout')}</span>
					</div>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>+750</span>
						<span className='main__intro-values-item__name'>
							{t('AllUsers')}
						</span>
					</div>
					<div className='main__intro-values-item'>
						<span className='main__intro-values-item__count'>{t('+230')}</span>
						<span className='main__intro-values-item__name'>{t('Bonus')}</span>
					</div>
				</div>
			</div>
		</section>
	)
}
