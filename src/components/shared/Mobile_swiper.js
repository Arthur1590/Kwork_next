import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'

const slideData = [
	{
		img: '/main/icons_cube.svg',
		title: 'Company Stocks',
		description:
			'Tracking successful promotions and ensuring financial security in trading on the market.',
	},
	{
		img: '/main/stars_max.svg',
		title: 'Artificial Intelligence',
		description:
			'They are the primary tool for conducting transactions in thefinancial market and the key to earning income from investments in the NextFi token.',
	},
	{
		img: '/main/icons_bubbles.svg',
		title: 'Precious Metals',
		description:
			'Constantly increasing assets and executing profitable transactions with them.',
	},
	{
		img: '/main/stars_bank.svg',
		title: 'Corporate Bonds',
		description:
			'Ownership of more than X bonds with regular updates and profitable financial transactions related to them.',
	},
	{
		img: '/main/oin_selector.svg',
		title: 'Oil Sector',
		description:
			'Smart and efficient trading of oil products in the eastern market.',
	},
	{
		img: '/main/icons_cube.svg',
		title: 'Innovative Startups',
		description:
			'Analysis and search for the most promising projects aimed at acquiring a stake and subsequent growth of dividends.',
	},
]
export const Mobile_swiper = () => {
	return (
		<Swiper
			modules={[Pagination]}
			pagination={{ clickable: true }}
			spaceBetween={50}
			slidesPerView={1}
			className='mobile__swiper'
		>
			{slideData.map(slide => (
				<SwiperSlide key={slide.title}>
					<div className='mobile__swiper-item big-item'>
						<Image src={slide.img} width={136} height={136} alt='Cube' />
						<div className='mobile__swiper-item-content'>
							<span className='mobile__swiper-title'>{slide.title}</span>
							<span className='mobile__swiper-text'>{slide.description}</span>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
