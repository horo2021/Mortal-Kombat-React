import styles from "./mainNavbar.module.css"
import logoImg from "../../img/Mortal-Kombat-Logo.png"

const MainNavbar = () => {
  return (
    
     <div className={styles["main-container"]}>
     <img className={styles["mortal-logo"]} src={logoImg} alt="mortal kombat logo"/>
    
</div>
   

   
  )
}

export default MainNavbar