'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import styles from './navbar.module.css';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleNavbar = () => {
        setShowMenu(!showMenu);
    }

    return(
        <nav className={`${styles["navbar"]} ${showMenu ? styles["open"] : ''}`}>
            <Container className={styles['nav-container']}>
                <div className={styles['mobile-header']}>
                    <a href='/' className={styles['logo-link']}>
                        <Image className={styles.logo} src='assets/logo.svg' width={115} height={44} priority={true} alt='Coca Logo'/>
                    </a>
                    <a className={`${styles['signin-btn']} ${styles['alt']}`} href='/'>Sign in</a>
                    <button className={`${styles['menu-btn']} ${showMenu ? styles['active'] : ''}`} onClick={toggleNavbar} aria-label="Open Menu"></button>
                </div>

                <div className={styles['nav-links']}>
                    <a className={`${styles['nav-link']} ${styles['active']}`} href='/'>Home</a>
                    <a className={styles['nav-link']} href='/'>Features</a>
                    <a className={styles['nav-link']} href='/'>Pricing</a>
                    <a className={styles['nav-link']} href='/'>Blog</a>
                    <a className={styles['nav-link']} href='/'>Resource</a>
                </div>
                
                <a className={styles["signin-btn"]} href='/'>Sign in</a>
            </Container>
        </nav>
    )
}