import './globals.scss'
import './page.scss'
import { Onest } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Header } from '../../components/shared/Header'

const onest = Onest({ subsets: ['latin'] })

export const metadata = {
	title: 'NextFi | Home',
	description: 'Coded by Arthur',
}

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body className={onest.className}>
				<Header />
				<main className='main'>{children}</main>
			</body>
		</html>
	)
}
