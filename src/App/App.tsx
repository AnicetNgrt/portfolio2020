import React from 'react';
import './App.css';
import HomeComponent from '../Home/Home';
import MenuComponent from '../Menu/Menu';
import AboutComponent from '../About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(props:{
  locs:{[key:string]:Locs};
}) {
  const [current, setCurrent] = React.useState("Home")
  return (
    <div className="App">
      <Router>
        <MenuComponent locs={props.locs["en"]} current={current} onClick={(place:string)=>setCurrent(place)}/>
        <Switch>
            <Route exact path="/">
              <HomeComponent locs={props.locs["en"]} />
            </Route>
            <Route path="/about">
              <AboutComponent locs={props.locs["en"]} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
