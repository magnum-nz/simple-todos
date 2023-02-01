import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className={styles.pageBody}>
      <BrowserRouter>
        <Route path="/" component={}/>
      </BrowserRouter>
      </section>
    </>
  );
};

export default App;


