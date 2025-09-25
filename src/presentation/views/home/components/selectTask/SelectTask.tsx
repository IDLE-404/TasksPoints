import AddTask from './components/addTask/AddTask'
import History from './components/history/History'
import styles from './style/Styles.module.css'


const SelectTask = () => {
  return (
    <div className={styles.container}>
        <div>
            <AddTask />
        </div>
        <div>
            <History />
        </div>
    </div>
  )
}

export default SelectTask