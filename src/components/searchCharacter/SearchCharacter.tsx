import React from "react";
import styles from "./searchCharacter.module.css";

const SearchCharacter = (props: { searchValue:string; setSearchValue: (arg0: string) => void }) => {
  return (
    <>
      <div className={styles["search-input-cont"]}>
        <input
          onChange={(e) => {
            props.setSearchValue(e.target.value);
          }}
          value={props.searchValue}
          type="text"
          placeholder="Search Charecters..."
        />
      </div>
    </>
  );
};

export default SearchCharacter;
