import styles from "./CityItem.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

const formalDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
function CityItem({ city, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!city.id)
    return <Message message="add your first city by clicking on the map" />;
  const { cityName, emoji, date } = city;
  console.log(city);
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formalDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
