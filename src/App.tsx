import React, { useState } from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';
import { setUncaughtExceptionCaptureCallback } from 'process';

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}
const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>羅伯特機器人炫酷炸翻天online購物平台名字要長</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {/* <div className={styles.robotList}>
        {this.state.robotGallery.map((r) => (
          <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
        ))}
      </div> */}
    </div>
  );
};

export default App;
