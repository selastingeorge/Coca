/*
    Component Name : Accordion
    Usage: FAQ Dropdown
*/

"use client"

import styles from './accordion.module.css';
import React, { useState } from 'react';

export const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className={styles['accordion']}>
            {props.items.map((faq, index) => (
                <div key={index} className={`${styles['accordion-item']} ${(props.category == faq.category) ? styles['show'] : ''}  ${(index == activeIndex) ? styles['expanded'] : ''}`}>
                    <div className={styles['accordion-header']} onClick={() => setActiveIndex((prevIndex) => (prevIndex === index ? null : index))}>
                        <span>{faq.question}</span>
                        {
                            (index == activeIndex) ? (
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3335 17.3376H6.66681V14.6709H25.3335V17.3376Z" fill="#FF5C00" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            )
                        }
                    </div>
                    <div className={`${styles['accordion-content']} ${(index == activeIndex) ? styles['expanded'] : ''}`}>{faq.answer}</div>
                </div>
            ))}
        </div>
    )
};