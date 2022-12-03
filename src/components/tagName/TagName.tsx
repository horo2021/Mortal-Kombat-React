import React from "react";
import styles from "./tagName.module.css";
const TagName = (props: { selectedtagHandler: (arg0: string) => void; name: string }) => {
  return (
    <button
     
      className={styles["tag-name-cont"]}
    >
      <label>
        <input  onChange={() => {
        props.selectedtagHandler(props.name);
      }} type="checkbox" />
        <span>{props.name}</span>
      </label>
    </button>
  );
};

export default TagName;
