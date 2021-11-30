import Head from "next/head";
import Image from "next/image";
import UserCard from "../components/UserCard";
import Widget from "../components/Widget";
import styles from "../styles/Home.module.css";
import userData from "../data/data.json";
import { useState } from "react";

export default function Home() {
  const [timeframeSelected, setTimeframeSelected] = useState("daily");

  return (
    <div>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
        <meta
          name="Time tracking dashboard"
          content="Time tracking dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UserCard />
        {userData.map((item) => {
          return (
            <Widget
              key={item.title}
              title={item.title}
              timeframes={item.timeframes}
              timeframeSelected={timeframeSelected}
            />
          );
        })}
      </main>

      <footer className={styles.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Frank Lam</a>.
      </footer>
    </div>
  );
}
