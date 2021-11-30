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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
