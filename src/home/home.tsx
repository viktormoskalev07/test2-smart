import clsx from "clsx";
import React, {useState} from "react";

import styles from "./home.module.scss";

const positions={
    1: "rotateX(0deg)",
    2:"rotateX(90deg)",
    3:"rotateX(180deg)",
    4:"rotateX(270deg)",
    5:"rotateY(90deg) rotateX(0)",
    6:"rotateY(-90deg ) rotateX(0) ",
}


export const Home = () => {
    const [getPosition , setPosition] = useState<keyof typeof positions>(1);
  const sides = Array(6).fill(" ")  ;
  console.log(getPosition);
  const rotateHandler=()=>{
      let newStep = 1 ;
      if(getPosition<3){
          newStep=getPosition+1
      }
      setPosition(newStep as keyof typeof positions)
  }
  const currentPosition= {transform:positions[getPosition]};
    console.log(currentPosition)
  return (
    <div className={styles.home}>
<button className={styles.btn} onClick={rotateHandler}> up</button>
      <div style={currentPosition} className={styles.cube}>
        {sides.map((_, i) => {
          return (
            <div key={i} className={clsx("side", "side" + (i + 1))}>
              {i+1} cube
            </div>
          );
        })}
      </div>

<div className={styles.buttons}>
    {sides.map((_, i ) => {
        return (
            <button key={i} className={styles.btn2} onClick={()=>setPosition(i+1 as keyof typeof positions)}> {i+1}</button>
        );
    })}
    </div>


    </div>
  );
};
