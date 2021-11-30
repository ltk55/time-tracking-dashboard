import styles from "../styles/Home.module.css";

export default function UserCard({ title, timeframes, timeframeSelected }) {
  return (
    <div className={styles.userCard}>
      <header>
        <span>Report for</span>
        <span>Jeremy Robson</span>
      </header>

      <div>
        <ul>
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
