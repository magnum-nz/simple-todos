import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className={styles.pageBody}>

      </section>
    </>
  );
};

export default App;


