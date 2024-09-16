'use client'
import React from 'react'
import clsx from 'clsx'
import Theme_switch from './Theme_switch'
import Locale_Switcher from './Locale_Switcher'

export const Burger = () => {
	const [show, setShow] = React.useState(true)
	const classChange = clsx('menu', { active: !show })
	const listClass = clsx('m_header', { active: !show })
	const handleClick = () => {
		setShow(!show)
	}
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
								<a href='' className='header__buttons-signup'>
									Sign Up
								</a>
								<a href='' className='header__buttons-login m__outline'>
									Log In
								</a>
							</div>

							<ul className='m__nav-list'>
							<a href='' className='m__nav-item'>
								Home
							</a>
							<a href='' className='m__nav-item'>
								Token
							</a>
							<a href='' className='m__nav-item'>
								Activity
							</a>
							<a href='' className='m__nav-item'>
								How to start
							</a>
							<a href='' className='m__nav-item'>
								Listing
							</a>
							<a href='' className='m__nav-item'>
								App
							</a>
							<a href='' className='m__nav-item'>
								FAQ
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
