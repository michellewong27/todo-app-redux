import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToDo from './pages/todo';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './modules/store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends React.Component{
  render(){
    return (
      <ReduxProvider store={reduxStore}> 
        <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ToDo Redux App</h1>
          </header>
          <ToDo />
        </div>
      </ReduxProvider>
    );
  }
}
export default App;
