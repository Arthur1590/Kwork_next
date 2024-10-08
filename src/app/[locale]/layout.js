import './globals.scss'
import './page.scss'
import { Onest } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Header } from '../components/shared/Header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const onest = Onest({ subsets: ['latin'] })

export const metadata = {
	title: 'NextFi | Home',
	description: 'NextFi - is a crypto trading platform. Invest with confidence. Start trading now.',
}

export default async function RootLayout({ children, params: { locale } }) {
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={onest.className}>
				<NextIntlClientProvider messages={messages}>
					<Header />

					<main className='main'>{children}</main>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
