import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return(
        <div className={styles.container}>
            <p className={styles.container_item}>Вся информация конфиденциальна</p>
            <p className={styles.container_item}>Ⓒ2024 Все права защищены © </p>
        </div>
    );
};

export default Footer;