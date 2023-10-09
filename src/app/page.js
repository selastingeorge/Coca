"use client"

import Image from 'next/image';
import styles from './page.module.css'
import { Heroarea } from '@/components/heroarea/heroarea';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Responsive } from 'swiper/modules';
import { Container } from '@/components/container/container';
import { FeatureBox } from '@/components/feature-box/feature-box';
import { PackageTable } from '@/components/package-table/package-table';
import { Accordion } from '@/components/accordion/accordion';
import { partners, features, testimonials, faq } from './data'

export default function Home() {
	const swiperRef = useRef();
	const [plan, setPlan] = useState('monthly');
	const [category, setCategory] = useState('general');

	return (
		<main>
			<Heroarea />
			<Container>
				<section className={styles['partners-section']}>
					<p className={styles['partners-caption']}>Trusted by over 50 thousand restaurants in 10+ countries</p>
					<Swiper className={styles['partners-swiper']} spaceBetween={20} slidesPerView={2}
						modules={[Navigation, Autoplay]} onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
						autoplay={{ delay: 2500, disableOnInteraction: false, }}
						breakpoints={{
							567: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							992: {
								slidesPerView: 6,
							},
						}}>
						{partners.map((partner, index) => (
							<SwiperSlide key={index} className={styles['partners-wiper-slide']}>
								<Image className={styles['partner-logo']} src={`/assets/${partner.url}`} width={80} height={70} alt={partner.name}></Image>
							</SwiperSlide>
						))}
					</Swiper>
				</section>

				<section className={styles['features-section']}>
					<h1 className={styles['features-title']}>Complementary features <br className={styles['title-break']}></br> for your business needs</h1>
					<FeatureBox direction='left' title='Dashboard to monitor your business sales from anywhere' content='Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.'></FeatureBox>
					<FeatureBox direction='right' title='Easier and better Desk Management' content='Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity.'></FeatureBox>
					<FeatureBox direction='left' title='More efficient customer recording and monitoring' content='Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.'></FeatureBox>
				</section>

				<section className={styles['packages-section']}>
					<div className={styles['packages-title-wrap']}>
						<h1 className={styles['packages-title']}>Packages for your business</h1>
						<div className={styles['package-plan-selector-wrap']}>
							<div className={styles['package-selector-plan-btn-wrap']}>
								<button className={`${styles['btn-monthly-selector']} ${(plan == 'monthly') ? styles['plan-active'] : ''}`} onClick={() => setPlan('monthly')}>Month</button>
								<button className={`${styles['btn-yearly-selector']} ${(plan == 'yearly') ? styles['plan-active'] : ''}`} onClick={() => setPlan('yearly')}>Annual</button>
							</div>
							<div className={styles['plan-info-wrap']}>
								<Image src='assets/info.svg' width={20} height={20} alt='Info'></Image>
								<span className={styles['info-text']}>Annual - <i>2 months free</i><i className={styles['confetti']}>🎉</i></span>
							</div>
						</div>
					</div>
					<PackageTable duration={plan}></PackageTable>
				</section>

				<section className={styles['testimonials-wide-section']}>
					<div className={styles['features']}>
						<h2 className={styles['features-title']}>Ease in the Hand</h2>
						<p className={styles['feature-content']}>
							Using our app in business, especially in the restaurant industry, has many advantages. Here are some of them:
						</p>
						<div className={styles['features-grid']}>
							{features.map((feature, index) => (
								<div key={index} className={styles['feature-item']}>
									<Image src={`/assets/${feature.icon}`} className={styles['feature-icon']} width={32} height={32} alt='Info'></Image>
									<h3 className={styles['feature-title']}>{feature.title}</h3>
									<p className={styles['feature-content']}>{feature.content}</p>
								</div>
							))}

						</div>
					</div>

					<div className={styles['testimonials']}>
						{testimonials.map((testimonial, index) => (
							<div key={index} className={styles['testimonials-card']}>
								<p className={styles['testimonials-text']}>
									“{testimonial.review}”
								</p>
								<div className={styles['user-details']}>
									<Image src={testimonial.photo} width={60} height={60} alt={testimonial.name}></Image>
									<div className={styles['user-info']}>
										<span className={styles['name']}>{testimonial.name}</span>
										<span className={styles['role']}>{testimonial.role}</span>
									</div>
								</div>
							</div>
						))}

					</div>
				</section>

				<section className={styles['faq']}>
					<div className={styles['faq-title-wrap']}>
						<h1 className={styles['faq-title']}>Frequently Asked Questions</h1>
						<div className={styles['faq-searchbox']}>
							<input className={styles['search-input']} type={'search'} placeholder='Type your question here'></input>
							<button className={styles['search-btn']} aria-label='search'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 21.0068L16.65 16.6568M19 11.0068C19 15.4251 15.4183 19.0068 11 19.0068C6.58172 19.0068 3 15.4251 3 11.0068C3 6.58856 6.58172 3.00684 11 3.00684C15.4183 3.00684 19 6.58856 19 11.0068Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span>Search</span>
							</button>
						</div>
					</div>

					<div className={styles['faq-split-section']}>
						<div className={styles['faq-btn-wrap']}>
							<button className={`${styles['btn-faq-selector']} ${(category == 'general') ? styles['active'] : ''}`} onClick={() => setCategory('general')}>General</button>
							<button className={`${styles['btn-faq-selector']} ${(category == 'transactions') ? styles['active'] : ''}`} onClick={() => setCategory('transactions')}>Transactions</button>
							<button className={`${styles['btn-faq-selector']} ${(category == 'payment') ? styles['active'] : ''}`} onClick={() => setCategory('payment')}>Payment</button>
							<button className={`${styles['btn-faq-selector']} ${(category == 'others') ? styles['active'] : ''}`} onClick={() => setCategory('others')}>Others</button>
						</div>

						<div className={styles['faq-accordion-wrap']}>
							<Accordion items={faq} category={category}></Accordion>
						</div>
					</div>
				</section>
			</Container>
		</main>
	)
}
