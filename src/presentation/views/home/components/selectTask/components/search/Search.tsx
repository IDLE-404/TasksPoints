import React, { useState } from 'react';
import { Tasks } from '@/data/datasources/local/data';
import styles from './style/Styles.module.css';

const Search = () => {
  const [tasks] = useState(Tasks);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const getFilterReadTasks = () => {
    let filtered = tasks;

    if (search.trim() !== "") {
      filtered = filtered.filter(task =>
        task.text.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter === "active") {
      filtered = filtered.filter(task => !task.completed);
    } else if (filter === "completed") {
      filtered = filtered.filter(task => task.completed);
    }

    return filtered;
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <select value={filter} onChange={e => setFilter(e.target.value)} className={styles.searchSelect}>
          <option value="all">Все</option>
          <option value="active">Активные</option>
          <option value="completed">Выполненные</option>
        </select>
      </div>
      

      <ul className={styles.taskList}>
        {getFilterReadTasks().map(task => (
          <li key={task.id} className={styles.taskItem}>
            {task.text}
            <span className={styles.taskStatus}>
              {task.completed ? "выполнено" : "не выполнено"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
