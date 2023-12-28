import styles from '../css/style.module.css';

export default function ForzaPage() {
    return (
        <article className={styles.article}>
          <h1 className={styles.article__title}>Forza Karting Sochi</h1>
          <p className={styles.article__paragraph}>
            В Олимпийском парке работает новый открытый развлекательный картинг центр мирового уровня!
          </p>
          <p className={styles.article__paragraph}>
            Вас ждут большая, широкая, безопасная трасса и супер современные карты
            европейского производства c двигателями мощностью 13 л.с.
            Трасса длинной более 500 метров  оборудована системой хронометража,
            фиксирующей данные заезда в режиме реального времени.
            По окончании заезда каждый пилот получает распечатку со своими результатами.
          </p>
        </article>
      )
}
