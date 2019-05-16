import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

// Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
