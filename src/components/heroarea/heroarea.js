"use client"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Chart } from '../chart/chart';

import styles from './heroarea.module.css'


export const Heroarea = () => {
	const swiperRef = useRef();
	const [index, setIndex] = useState(0);
	const testimonials = [{
		name: 'Patrick Fernandes',
		role: 'CEO at Burger King',
		review: 'Deliver a better customer experience and increase their operational efficiency.',
		photo: 'https://i.pravatar.cc/150?img=60'
	},
	{
		name: 'Sarah',
		role: 'CEO at TechSolutions Inc',
		review: 'Outstanding service, exceeded all expectations! Exceptional support from a dedicated team.',
		photo: 'https://i.pravatar.cc/150?img=49'
	},
	{
		name: 'Emily',
		role: 'CEO at ApexTech Solutions',
		review: 'A game-changer for our productivity! They delivered results beyond belief!',
		photo: 'https://i.pravatar.cc/150?img=32'
	}];

	return (
		<section className={styles['hero-area']}>
			<div className={styles['hero-area-wrapper']}>
				<div className={styles['hero-item-left']}>
					<div className={styles['hero-area-content-wrap']}>
						<p className={styles['hero-area-caption']}>All the features you need in one App for any kind of your business 🚀</p>
						<h1 className={styles['hero-title']}>Manage your restaurant business so advanced</h1>
						<a href='/' className={styles['hero-cta']}>
							<span>Get Started for Free</span>
							<div className={styles['cta-arrow-wrap']}>
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
									<path stroke="#FF5C00" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m0 0-6-6m6 6-6 6" />
								</svg>
							</div>
						</a>
					</div>
					<Image className={styles['hero-banner']} src='/assets/hero-area-banner.png' width={1140} height={559} priority={true} alt='Banner'/>
				</div>
				<div className={styles['hero-item-right']}>
					<div className={styles['chart-container']}>
						<div className={styles['card-title-wrap']}>
							<div className={styles['card-title-icon']}>
								<Image src='assets/chart.svg' width={16} height={16} alt='Chart Icon' />
							</div>
							<span>Sales Statistics</span>
						</div>
						<div className={styles['chart-wrapper']}>
							<Chart />
						</div>
					</div>
					<div className={styles['rating']}>
						<div className={styles['card-title-wrap']}>
							<div className={styles['card-title-icon']}>
								<Image src='assets/medal-star.svg' width={16} height={16} alt='Medal Icon' />
							</div>
							<span>Rating Review</span>
						</div>
						<p className={styles['review-text']}>Reviews of some of our app restaurant industry companies.</p>
						<div className={styles['rating-wrap']}>
							<Image src='assets/star.svg' width={48} height={48} alt='Star Icon' />
							<span className={styles['rating-text']}>4.9</span>
						</div>
					</div>
					<div className={styles['partners']}>
						<div className={`${styles['card-title-wrap']} ${styles['dark']}`}>
							<div className={`${styles['card-title-icon']} ${styles['icon-light']}`}>
								<Image src='assets/celo.svg' width={16} height={16} alt='Celo Icon' />
							</div>
							<span>Total Partner</span>
						</div>
						<div className={styles['partner-wrap']}>
							<span className={styles['parner-text']}>50</span>
							<span className={styles['partner-caption']}>thousands</span>
						</div>
					</div>
					<div className={styles['testimonials']}>
						<Swiper className={styles['testimonials-swiper']} spaceBetween={50} slidesPerView={1} modules={[Navigation,Autoplay]}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper;
							}}
							onSlideChange={(swiper) => {
								setIndex(swiper.activeIndex);
							}}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}>

							{testimonials.map((testimonial, index) => (
								<SwiperSlide key={index} className={styles['slides']}>
									<p className={styles['testimonials-text']}>"{testimonial.review}"</p>
									<div className={styles['slides-footer']}>
										<Image width={40} height={40} className={styles['user-icon']} src={testimonial.photo} alt={testimonial.name}></Image>
										<div className={styles['user-details-wrap']}>
											<span className={styles['user-name']}>{testimonial.name}</span>
											<span className={styles['user-role']}>{testimonial.role}</span>
										</div>
									</div>
								</SwiperSlide>
							))}

						</Swiper>
						<div className={styles['swiper-navigation']}>
							<button onClick={() => swiperRef.current?.slidePrev()} aria-label='Previous'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path className={`${styles['prev-arrow']} ${(index == 0) ? styles['disabled'] : ''}`} d="M20 12L4 12M4 12L10 18M4 12L10 6" stroke="#19191C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
							<button onClick={() => swiperRef.current?.slideNext()} aria-label='Next'>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path className={`${styles['next-arrow']} ${(index == 2) ? styles['disabled'] : ''}`} d="M4 12L20 12M20 12L14 6M20 12L14 18" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};