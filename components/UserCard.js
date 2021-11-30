import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function UserCard({ title, timeframes, timeframeSelected }) {
  return (
    <div className={styles.userCard}>
      <header className={styles.userCard__header}>
        <Image src="/images/image-jeremy.png" width={50} height={50} alt="" />
        <p>Report for</p>
        <p>Jeremy Robson</p>
      </header>

      <div>
        <ul className={styles.userCard__timeframe}>
          <li>
            <button>Daily</button>
          </li>
          <li>
            <button>Weekly</button>
          </li>
          <li>
            <button>Monthly</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
