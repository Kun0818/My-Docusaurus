import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import WebDevelopment from "../../../static/img/WebDevelopment.png";
import OutdoorActive from "../../../static/img/OutdoorActive.png";
import WebDevelopmentDark from "../../../static/img/Color Composition2.png";
import OutdoorActiveDark from "../../../static/img/Color Composition1.png";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: "網頁開發",
    Svg: WebDevelopment,
    Svg2: WebDevelopmentDark,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "戶外活動",
    Svg: OutdoorActive,
    Svg2: OutdoorActiveDark,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg,Svg2, title, description }) {
  const { colorMode } = useColorMode();

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={`text--center ${styles.featureSvg}`}
          src={colorMode === 'light'? Svg : Svg2}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
