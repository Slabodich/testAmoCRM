import React from 'react';
import styles from './Header.module.scss';

import Logo from '../../accets/images/logo.svg';
import Telegram from '../../accets/images/telegram.svg';
import Viber from '../../accets/images/viber.svg';
import Whatsapp from '../../accets/images/whatsapp.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
        <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Виджеты</a>
          </li>
          <li>
            <a href="#">Интеграции</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li>
            <a href="#">Сертификаты</a>
          </li>
        </ul>
      </nav>

      <div className={styles.contacts}>
        <span className={styles.phone}>+7 555 555-55-55</span>
        <div className={styles.socials}>
          <img src={Telegram} alt="Telegram" />
          <img src={Viber} alt="Viber" />
          <img src={Whatsapp} alt="Whatsapp" />
        </div>
      </div>
    </header>
  );
};

export default Header;
