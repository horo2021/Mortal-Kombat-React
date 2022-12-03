import React from "react";
import CharacterCard from "../characterCard/CharacterCard";
import styles from "./characterTable.module.css";
import type { Character } from "../../types";

const CharacterTable = (props: { charactersTable: any[] ,onSelectHandler: (arg0: number) => void}) => {
 
  return (
    <>
      <div className={styles["table-cont"]}>
        <div className={styles["character-name"]}>Character</div>
        <div className={styles["character-tag"]}>Tags</div>

        <div>Mobility</div>
        <div>Technique</div>
        <div>Survivability</div>
        <div>Power</div>
        <div>Energy</div>
      </div>
      {props.charactersTable.map((item) => {
        return (
          <div key={item.id}>
          <CharacterCard
            image={item.image}
            name={item.name}
            tags={item.tags}
            listOfAbillities={item.abilities}
            onSelectHandler={props.onSelectHandler}
            charcterId={item.id}
          />
          </div>
        );
      })}
    </>
  );
};

export default CharacterTable;
