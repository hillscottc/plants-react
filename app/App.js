import React from 'react';
import styles from './App.css';
import grassImg from './images/grass2.wide.png'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        <p>hello</p>
        <img src={grassImg} />
      </div>
    );
  }
}
