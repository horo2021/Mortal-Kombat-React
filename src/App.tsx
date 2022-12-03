import MainNavbar from "./components/mainNavbar/MainNavbar";
import jsonData from "./data/characters.json";
import type { Character } from "./types";
import "./App.css";
import SquadDisplay from "./components/squadDisplay/SquadDisplay";
import SearchCharacter from "./components/searchCharacter/SearchCharacter";
import TagNames from "./components/tagNames/TagNames";
import CharacterTable from "./components/characterTable/CharacterTable";
import useMain from "./handlers/useMain";

const data: Character[] = jsonData as Character[];

function App() {

 const [charactersTable,onSelectHandler,listOfChamps,setCharacterTags,setSearchValue,searchValue]=useMain(jsonData)
  return (
    <>
      <MainNavbar />
      <main>
        <SquadDisplay listOfChamps={listOfChamps} />
        <SearchCharacter setSearchValue={setSearchValue} searchValue={searchValue}  />
        <TagNames setCharacterTags={setCharacterTags} />
        <CharacterTable charactersTable={charactersTable} onSelectHandler={onSelectHandler}  />
      </main>
    </>
  );
}

export default App;
