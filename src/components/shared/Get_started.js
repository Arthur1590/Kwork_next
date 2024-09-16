import Image from "next/image"
import React from "react"

export const Get_started = () => {
	return (
		<section className="main__getstarted">
			<div className="site-holder">
				<h2
					className="section-title"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-once="true"
				>
					How to get <b>started</b>
				</h2>
				<p
					className="section-description medium-margin"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-once="true"
				>
					Our goal is to create the simplest and most comfortable conditions for
					investing in the NextFi project.
				</p>
				<div className="getstarted__content">
					<div
						className="getstarted__row"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-once="true"
					>
						<div className="getstarted__row-item">
							<span className="getstated__item-title">Account creation</span>
							<p className="getstarted__item-text">
								Simple and quick registration on our platform. In just a few
								minutes, you"ll gain access to all the features of NextFi.
							</p>
							<a href="" className="btn btn-blue">
								Sign Up
							</a>
						</div>
						<div className="getstarted__row-item">
							<span className="getstated__item-title">Token purchase</span>
							<p className="getstarted__item-text">
								You can purchase the NextFi token using most popular
								cryptocurrencies. The fixed price and bonus system allow each
								early user of our platform to gain maximum advantages.
							</p>
							<a href="" className="btn btn-blue">
								Buy a token
							</a>
						</div>
					</div>

					<div
						className="getstarted__big-item"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-once="true"
					>
						<span className="getstated__item-title">
							Investment in an investment box
						</span>
						<p className="getstarted__item-text">
							The convenient investment box system of NextFi offers flexible
							investment conditions. You can always withdraw your funds early or
							choose a level that matches your requirements.
						</p>
						<div className="getstarted__big-content">
							{/* SWIPER */}
							<div className="swiper getstarted-swiper">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="getstated__big-content__item">
											<div className="getstarted__image-wrapper">
												<Image
													width={280}
													height={280}
													src="/main/getstarted-balance.png"
													alt="balance"
												/>
											</div>
											<a href="" className="btn btn-blue btn-none">
												Top up your balance
											</a>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="getstated__big-content__item">
											<div className="getstarted__image-wrapper">
												<Image
													width={280}
													height={280}
													src="/main/getstarted-balance.png"
													alt=""
												/>
											</div>
											<a href="" className="btn btn-blue btn-none">
												Top up your balance
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="getstated__big-content__item">
								<div className="getstarted__image-wrapper">
									<Image
										width={280}
										height={280}
										src="/main/getstarted-balance.png"
										alt="balance"
									/>
								</div>
								<a href="" className="btn btn-blue btn-none">
									Top up your balance
								</a>
							</div>
							<div className="getstated__big-content__item">
								<div className="getstarted__image-wrapper">
									<Image
										width={280}
										height={280}
										src="/main/getstarted-income.png"
										alt="income"
									/>
								</div>
								<a href="" className="btn btn-blue btn-none">
									Withdraw money
								</a>
							</div>
							<div className="getstarted__big-content__image">
								<Image
									width={328}
									height={180}
									src="/main/getstarted-stats.png"
									alt="stats"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
