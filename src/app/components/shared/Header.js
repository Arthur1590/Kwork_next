import { Logo_header } from '../ui/Logo_header'
import { Navigation } from './Navigation'
import Theme_switch from './Theme_switch'
import Locale_Switcher from './Locale_Switcher'
import { Burger } from './Burger'
import { useTranslations } from 'next-intl'

export const Header = () => {
	const t = useTranslations('nav')
	return (
		<header id='header'>
			<div
				className='header__content'
				data-aos='fade-down'
				data-aos-duration='1000'
			>
				<a href='' className='header__logo'>
					<Logo_header />
				</a>

				<Navigation />

				<div className='header__actions'>
					<div className='header__buttons'>
						<a href='' className='header__buttons-login'>
							{t('LogIn')}
						</a>
						<a href='' className='header__buttons-signup'>
							{t('SignUp')}
						</a>
						<Burger />
					</div>

					<div className='header__icons'>
						<a href='#' className='header__icons-item'>
							<Theme_switch />
						</a>
						<button href='' className='header__icons-item'>
							<Locale_Switcher />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
