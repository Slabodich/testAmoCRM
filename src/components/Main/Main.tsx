import React from 'react';
import styles from './Main.module.scss';

const Header: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.firstPartTitle}>Зарабатывайте больше</h1>
        <h1 className={styles.secondPartTitle}>с WELBEX</h1>
        <p className={styles.tagline}>
          Развиваем и контролируем продажи за вас
        </p>
        <h2>Вместе с бесплатной консультацией мы дарим:</h2>
        <ul>
          <li>Skype аудит</li>
          <li>30 виджетов</li>
          <li>Dashboard</li>
          <li>Месяц аmoCRM</li>
        </ul>
      </div>
    </main>
  );
};

export default Header;
