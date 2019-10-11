import React, { Component } from 'react';
import logo from './logo.svg';
import Item from './Item';
import Target from './Target';
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' }
    ]
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To React</h1>
        </header>
        <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
                {this.state.items.map((item, index) => (
                  <Item key={item.id} item={item} />
                ))}
            </div>

            <Target />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
