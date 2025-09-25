import styles from "./style/Style.module.css"
import { GoTrophy } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <span>TP</span>
        </div>
        <div className={styles.logoText}>
          <span>TaskPoints</span>
          <p>Gamify your productivity</p>
        </div>
      </div>
      <div className={styles.containerButton}>
        <div className={styles.containerPts}>
          <GoTrophy />
          <span>0 pts</span>
        </div>
        <div className={styles.containerUser}>
          <div className={styles.boxName}>
            <GoPerson />
            <span>Name</span>
          </div>
          <GoSignOut />
        </div>
      </div>
    </div>
  )
}

export default Header