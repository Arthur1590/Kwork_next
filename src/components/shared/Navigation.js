import React from 'react'
import Theme_switch from './Theme_switch'
import Image from 'next/image'

export const Navigation = () => {
	return (
		<div
			className='header__content'
			data-aos='fade-down'
			data-aos-duration='1000'
		>
			<a href='' className='header__logo'>
				<Image
					width={50}
					height={50}
					src='/header_icons/logo_icon.svg'
					alt='NextFi Logo'
					className='logo'
					priority
				/>
				<span className='theme-icon'>extFi </span>
			</a>
			<nav className='header__navigation'>
				<a href='' className='header__navigation-item'>
					Home
				</a>
				<a href='' className='header__navigation-item'>
					Token
				</a>
				<a href='' className='header__navigation-item'>
					Activity
				</a>
				<a href='' className='header__navigation-item'>
					How
				</a>
				<a href='' className='header__navigation-item'>
					Listing
				</a>
				<a href='' className='header__navigation-item'>
					App
				</a>
				<a href='' className='header__navigation-item'>
					FAQ
				</a>
			</nav>
			<div className='header__actions'>
				<div className='header__buttons'>
					<a href='' className='header__buttons-login'>
						Log In
					</a>
					<a href='' className='header__buttons-signup'>
						Sign Up
					</a>
				</div>
				<div className='header__icons'>
					<a href='#' className='header__icons-item'>
						<Theme_switch />
					</a>
					<a href='' className='header__icons-item'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							class='lucide lucide-laptop-minimal'
						>
							<rect width='18' height='12' x='3' y='4' rx='2' ry='2' />
							<line x1='2' x2='22' y1='20' y2='20' />
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}
