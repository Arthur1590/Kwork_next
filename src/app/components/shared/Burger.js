'use client'
import React from 'react'
import clsx from 'clsx'
import Theme_switch from './Theme_switch'
import Locale_Switcher from './Locale_Switcher'
import { useTranslations } from 'next-intl'

export const Burger = () => {
	const [show, setShow] = React.useState(true)
	const classChange = clsx('menu', { active: !show })
	const listClass = clsx('m_header', { active: !show })
	const handleClick = () => {
		setShow(!show)
	}
	const t = useTranslations('nav')
	return (
		<>
			{!show && (
				<div className={listClass}>
					<div className='wrapper'>
						<div className='img__wrapper'>
							<a href='#' className='header__icons-item'>
								<Theme_switch />
							</a>
							<button href='' className='header__icons-item'>
								<Locale_Switcher />
							</button>
						</div>
						<span></span>
						<div className='m__nav'>
							<div className='m__buttons'>
								<a href='' className='m__buttons-signup'>
									{t('SignUp')}
								</a>
								<a href='' className='m__buttons-login m__outline'>
									{t('LogIn')}
								</a>
							</div>

							<ul className='m__nav-list'>
								<a href='' className='m__nav-item'>
									{t('home')}
								</a>
								<a href='' className='m__nav-item'>
									{t('token')}
								</a>
								<a href='' className='m__nav-item'>
									{t('activity')}
								</a>
								<a href='' className='m__nav-item'>
									{t('how')}
								</a>
								<a href='' className='m__nav-item'>
									{t('listing')}
								</a>
								<a href='' className='m__nav-item'>
									{t('app')}
								</a>
								<a href='' className='m__nav-item'>
									{t('faq')}
								</a>
							</ul>
						</div>
					</div>
				</div>
			)}
			<div className={classChange} onClick={handleClick}>
				<span></span>
			</div>
		</>
	)
}
