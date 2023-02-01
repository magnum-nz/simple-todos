import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { Todos } from "./components/Todos/Todos";
import styles from './App.module.css';

const App: React.FC = () => {
  const [ todos, setTodos ] = useState({
    todos: [],
    filter: '',
    completedTodos: []
  })


  return (
    <>
      <Navbar />
      <section className={styles.pageBody}>
        <Routes>
          <Route path='/' element={<Todos />}/>
        </Routes>
      </section>
    </>
  );
};

export default App;


