import styles from '../css/style.module.css';

export default function HomePage() {
    return (
        <article className={styles.article}>
          <h1 className={styles.article__title}>Гоночн​ое такси</h1>
          <p className={styles.article__paragraph}>
            Гоночн​ое такси – отличная возможность насладиться скоростью и мастерством гонщика,
            сидя на месте штурмана, и стать свидетелем настоящего мастерства профессиональных
            инструкторов Сочи Автодрома, в полной мере ощутив крутые виражи на самой современной
            гоночной трассе России.
          </p>
        </article>
    )
}
