import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function HomepageHeader() {
  return (
    <header className={styles.Banner}>
      <div className="container">
        <h1 className={styles.Title}>Kunda Website</h1>
        <p className={styles.Slogan}>Keep improving every day</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            我的程式筆記
          </Link>
        </div>
      </div>
    </header>
  );
}
