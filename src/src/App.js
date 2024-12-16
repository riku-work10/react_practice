import './App.css';
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import React from 'react';
import { FaBeer } from 'react-icons/fa';


class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}


function App() {
  return (
    <Header /> // Headerコンポーネントを呼び出す
  );
}

export default App;
