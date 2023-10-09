'use client'

import styles from './container.module.css';

export const Container = (props) => {
    const { className, ...rest } = props;

    return(
        <div className={`${styles.container} ${className}`} {...rest}>
            {props.children}
        </div>
    )
}