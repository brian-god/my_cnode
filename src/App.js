import React, { Component } from 'react';
import  RouterIndex from './router/index'
import './static/index.css'
class App extends Component {
  render() {
    return (
      <div className="pageWarp">
        <RouterIndex/>
      </div>
    )  
  }
}

export default App;
