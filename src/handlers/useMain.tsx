import React, { useState } from "react";
const useMain = (data: any) => {
  const [listOfChamps, setListOfChamps] = useState<any>([]);
  const [characterTags, setCharacterTags] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");

  const tunedData = data.filter((item: any) => {
    return (
      item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (characterTags.length === 0 ||
        item.tags?.find((tagItem: any) => {
          return characterTags.includes(tagItem.tag_name);
        }))
    );
  });
  const onSelectHandler = (id: number) => {
    const isExicted = listOfChamps.find((item: any) => {
      return id === item.id;
    });
    const newCharacter = data.find((item: any) => {
      return id === item.id;
    });
    setListOfChamps((prev: any) => {
      if (!isExicted && prev.length < 6) {
        return [...prev, newCharacter];
      } else {
        return prev.filter((item: any) => {
          return id !== item.id;
        });
      }
    });
  };

  return [
    tunedData,
    onSelectHandler,
    listOfChamps,
    setCharacterTags,
    setSearchValue,
    searchValue,
  ];
};

export default useMain;
