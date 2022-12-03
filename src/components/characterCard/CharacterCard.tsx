import React from "react";
import styles from "./characterCard.module.css";

const CharacterCard = (props: {
  image: string;
  name: string;
  tags: { slot: number; tag_name: string }[];
  listOfAbillities: { abilityName: string; abilityScore: string }[];
  onSelectHandler: (arg0: number) => void,
  charcterId:number
}) => {
  
  return (
    <div className={styles["card-cont"]}>
      <div className={styles["character-name"]}>
        <input onChange={()=>props.onSelectHandler(props.charcterId)} type="checkbox" />
        <img src={props.image} />
        <h4>{props.name}</h4>
      </div>
      <div className={styles["character-tag"]}>
       {props.tags?.map((item)=>{
        return <button key={item.slot}>{item.tag_name}</button>
       })}
       
      </div>
      {props.listOfAbillities.map((item)=>{
        return <div key={item.abilityName}>{item.abilityScore}</div>
      })}
     
    </div>
  );
};

export default CharacterCard;
