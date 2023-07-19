import React from 'react';
import styles from './Main.module.scss';
import Button from '../ui/Button/Button';

const Header: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h1 className={styles.firstPartTitle}>Зарабатывайте больше</h1>
          <h1 className={styles.secondPartTitle}>с WELBEX</h1>
          <p className={styles.tagline}>
            Развиваем и контролируем продажи за вас
          </p>
        </div>
        <div className={styles.rigth}>
          <h2 className={styles.offerTitle}>
            Вместе с <span>бесплатной </span> <span>консультацией </span>
            мы дарим:
          </h2>
          <ul className={styles.offerList}>
            <li>Skype аудит</li>
            <li>30 виджетов</li>
            <li>Dashboard</li>
            <li>Месяц аmoCRM</li>
          </ul>
          <div className={styles.deskOfferList}>
            <div>
              <h4>Виджеты</h4>
              <span>30 готовых решений</span>
            </div>
            <div>
              <h4>Dashboard</h4>
              <span>с показателями вашего бизнеса</span>
            </div>
            <div>
              <h4>Skype Аудит</h4>
              <span>отдела продаж и CRM системы</span>
            </div>
            <div>
              <h4>35 дней</h4>
              <span>использования CRM</span>
            </div>
          </div>
          <div className={styles.button}>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
