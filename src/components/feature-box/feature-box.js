import styles from './feature-box.module.css';

export const FeatureBox = (props) => {
    const direction = (props.direction)?props.direction:'left';
    return(
        <div className={styles['feature-box']}>
            <div className={styles['image-wrapper']} style={{order:(direction=='left')?1:2}}>
                
            </div>
            <div className={styles['feature-content-wrap']} style={{order:(direction=='left')?2:1}}>
                <h2 className={styles['feature-title']}>{props.title}</h2>
                <p className={styles['feature-content']}>{props.content}</p>

                <div className={styles['feature-btn-wrap']}>
                    <a className={styles['btn-accent']} href='/'>Launch Demo</a>
                    <a className={styles['btn-outlined']} href='/'>More Info</a>
                </div>
            </div>
            
        </div>
    )
};