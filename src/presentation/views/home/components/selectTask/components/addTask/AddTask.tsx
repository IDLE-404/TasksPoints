import Search from '../search/Search'
import styles from './style/Styles.module.css'


const AddTask = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          <span>Your Tasks</span>
          <p>0 tasks</p>
        </div>
        <button className={styles.buttonAdd}>+ Add Task</button>
      </div>

      <div className={styles.filter}>
        <Search />
        <button>All</button>
      </div>
    </div>
  )
}

export default AddTask