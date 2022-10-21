import React from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}
class App extends React.Component<Props, State> {
  /**
   * 生命週期第一階段:初始化，初始化組件state
   */
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
  }

  /**
   * 在組件創建好dom元素之後，掛載進頁面的時候調用
   */
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  /**
   * 生命週期第二階段:更新
   */

  /**
   * 組件銷毀後調用，可以當作 destructor 來使用
   */
  componentWillUnmount(): void {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="" />
          <h1>羅伯特機器人炫酷炸翻天online購物平台名字要長</h1>
        </div>
        <button
          onClick={() => {
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log('count: ', this.state.count);
              }
            );
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log('count: ', this.state.count);
              }
            );
          }}
        >
          Click
        </button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
