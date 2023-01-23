import clsx from "clsx";
import React from "react";

import styles from "./home.module.scss";

export const Home = () => {
  const sides = Array(6).fill(" ");
  console.log(sides, 2);

  return (
    <div className={styles.home}>
      <h1>home</h1>
      <div className={styles.cube}>
        {sides.map((_, i) => {
          return (
            <div key={i} className={clsx("side", "side" + (i + 1))}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};
