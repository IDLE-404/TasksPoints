import CardActive from "./components/cardActive/CardActive"
import SelectTask from "./components/selectTask/SelectTask"
import styles from './style/Styles.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <CardActive />
        <SelectTask />      
      </div>
    </div>
  )
}

export default Home