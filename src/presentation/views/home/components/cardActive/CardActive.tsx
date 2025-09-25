import { FiAward, FiCheckCircle, FiActivity, FiAlertCircle } from "react-icons/fi";
import styles from './style/Styles.module.css'


const cardItem = [
  { name: "Total Points",    number: "0", context: "All pts",              icon: FiAward,       color: "#FFE135", bg:"#eeff0041"},
  { name: "Completed Tasks", number: "0", context: "0% completion rate",   icon: FiCheckCircle, color: "green",   bg:"#31aa2654" },
  { name: "Active Tasks",    number: "0", context: "All on track",         icon: FiActivity,    color: "blue",    bg:"#0d048060"  },
  { name: "Points Lost",     number: "0", context: "From missed deadlines",icon: FiAlertCircle, color: "red",     bg:"#ffecec"  },
]

const CardActive = () => {
  return (
    <div className={styles.container}>
      {cardItem.map((item, key) => {
        const Icon = item.icon
        return (
          <div key={key} className={styles.cardContainer}>
            <div className={styles.bar}>
              <Icon className={styles.icon} color={item.color} style={{background: item.bg}} size={24}/>
              <p>{item.number}</p>
            </div>

            <div className={styles.context}>
              <span>{item.name}</span>
              <p>{item.context}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardActive
