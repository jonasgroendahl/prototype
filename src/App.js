import React, { Component } from 'react';
import Router from "./components/Router/Router";
import { Provider } from "./components/Context/Context";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
