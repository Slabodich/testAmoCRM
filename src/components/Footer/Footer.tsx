import React from 'react';
import styles from './Footer.module.scss';

import Telegram from '../../accets/images/telegram.svg';
import Viber from '../../accets/images/viber.svg';
import Whatsapp from '../../accets/images/whatsapp.svg';

const menuList = [
  'Расчёт стоимости',
  'Услуги',
  'Виджеты',
  'Интеграции',
  'Наши клиенты',
  'Благодарность клиентов',
  'Кейсы',
  'Сертификаты',
  'Блог на Youtube',
  'Вопрос / Ответ',
];

const Footer: React.FC = () => {
  const column1 = menuList.slice(0, 5);
  const column2 = menuList.slice(5, 10);

  return (
    <footer className={styles.wrraper}>
      <div className={styles.footer}>
        <div className={styles.aboutCompany}>
          <h3 className={styles.title}>О компании</h3>
          <div>
            <a href="#">
              <span>Партнёрская программа</span>
            </a>
            <a href="#">
              <span>Вакансии</span>
            </a>
          </div>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Меню</h3>
          <div className={styles.columnsWrapper}>
            <ul className={styles.column}>
              {column1.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className={styles.column}>
              {column2.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.title}>Контакты</h3>
          <span className={styles.phone}>+7 555 555-55-55</span>
          <div className={styles.socials}>
            <img src={Telegram} alt="Telegram" />
            <img src={Viber} alt="Viber" />
            <img src={Whatsapp} alt="Whatsapp" />
          </div>
          <span className={styles.addres}>
            Москва, Путевой проезд 3с1, к 902
          </span>
          <div className={styles.info}>
            <span>©WELBEX 2022. Все права защищены.</span>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
