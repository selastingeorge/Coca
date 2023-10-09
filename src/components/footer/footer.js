import styles from './footer.module.css'
import Image from 'next/image'
import { Container } from "../container/container"

export const Footer = (props) => {
    return(
        <section className={styles['footer-wrap']}>
            <div className={styles['footer-ad']}>
                <div className={styles['bg-overlay']}></div>
                <div className={styles['content-wrap']}>
                    <Container>
                        <div className={styles['content-container']}>
                            <h1 className={styles['footer-ad-title']}>Gain Excellence with the Best POS Solutions</h1>
                            <p className={styles['footer-ad-caption']}>
                                Provide an unforgettable customer experience with fast ordering, convenient payments, and better service.
                            </p>
                            <a href='/' className={styles['footer-cta']}>
                                <span>Try for free</span>
                                <div className={styles['cta-arrow-wrap']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                                        <path stroke="#FF5C00" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m0 0-6-6m6 6-6 6" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </Container>
                    <Image className={styles['footer-banner']} src='/assets/footer-banner.png' width={1140} height={900} alt='Footer Banner'></Image>
                </div>
            </div>
            <div className={styles['footer-bottom']}>
                <div className={styles['footer-start']}>
                    <h2 className={styles['footer-title']}>Don't Miss This Exclusive Opportunity</h2>
                    <div className={styles['newsletter-wrap']}>
                        <p className={styles['newsletter-text']}>Enter your email address and start connecting with a better business world using our POS products.</p>
                        <div className={styles['newsletter-email-box']}>
                            <input type='email' placeholder='Enter your email'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className={styles['footer-end']}>
                    <nav className={styles['footer-nav']}>
                        <Image src='/assets/footer-logo.svg' width={114} height={44} className={styles['footer-logo']} alt='Coca Logo'></Image>
                        <div className={styles['footer-links']}>
                            <a href='/'>Features</a>
                            <a href='/'>Pricing</a>
                            <a href='/'>Blog</a>
                            <a href='/'>Resource</a>
                            <a href='/'>Terms & Conditions</a>
                            <a href='/'>Privacy Policy</a>
                        </div>
                    </nav>
                    <div className={styles['copyright']}>
                        <span className={styles['copyright-text']}>© 2023 Coca, Inc. All rights reserved.</span>
                        <div className={styles['social-media']}>
                            <a href='/'>
                                <Image src='/assets/facebook.svg' width={24} height={24} alt='Facebook'></Image>
                            </a>
                            <a href='/'>
                                <Image src='/assets/instagram.svg' width={24} height={24} alt='Instagram'></Image>
                            </a>
                            <a href='/'>
                                <Image src='/assets/twitter.svg' width={24} height={24} alt='Twitter'></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}