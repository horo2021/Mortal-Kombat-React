import React from "react";
import SelectedCharacter from "../selectedCharacter/SelectedCharacter";
import styles from "./squadDisplay.module.css";
const SquadDisplay = (props: { listOfChamps: any }) => {
  const allAbillities: any = {
    Power: [],
    Mobility: [],
    Technique: [],
    Survivability: [],
    Energy: [],
  };
  props.listOfChamps.forEach((item: { abilities: any[]; }) => {
    item.abilities.forEach((abillityItem: any) => {
      allAbillities[abillityItem.abilityName].push(abillityItem.abilityScore);
    });
  });
  const average = (array: any[]) =>
    array.reduce((a, b) => a + b) / array.length;

  return (
    <div className={styles["squad-container"]}>
      <h1>Select your squad to defend earthRealm</h1>
      <div className={styles["selected-character-continer"]}>
        {props.listOfChamps.map((item: any) => {
          return <SelectedCharacter key={item.id} image={item.image} />;
        })}
      </div>
      <div className={styles["characters-info"]}>
        <div>
          <h3>Power</h3>
          <h3>
            {allAbillities.Power.length > 0
              ? Math.floor(average(allAbillities.Power))
              : "-"}
          </h3>
        </div>
        <div>
          <h3>Mobility</h3>
          <h3>
            {allAbillities.Mobility.length > 0
              ? Math.floor(average(allAbillities.Mobility))
              : "-"}
          </h3>
        </div>
        <div className={styles["midlle-category-style"]}>
          <h3>Technique</h3>
          <h3>
            {allAbillities.Technique.length > 0
              ? Math.floor(average(allAbillities.Technique))
              : "-"}
          </h3>
        </div>
        <div>
          <h3>Survivability</h3>
          <h3>
            {allAbillities.Survivability.length > 0
              ? Math.floor(average(allAbillities.Survivability))
              : "-"}
          </h3>
        </div>
        <div>
          <h3>Energy</h3>
          <h3>
            {allAbillities.Energy.length > 0
              ? Math.floor(average(allAbillities.Energy))
              : "-"}
          </h3>
        </div>
      </div>
      <div className={styles["average-note"]}>
        <p>* Totals as average for squad</p>
      </div>
    </div>
  );
};

export default SquadDisplay;
