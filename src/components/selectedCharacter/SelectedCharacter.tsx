import styles from "./selectedCharacter.module.css"
const SelectedCharacter = (props:{image:string}) => {
  return (
 
    <img  className={styles["character-img"]} src={props.image} alt="character logo"/>
    
  )
}

export default SelectedCharacter