import React from 'react';
import {Localization} from '../../api/types';
import './App.css';
import HomeComponent from '../Home/Home';
import MenuComponent from '../Menu/Menu';
import AboutComponent from '../About/About';
import ProjectsComponent from '../Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const {electron} = window as any;

function openOutside(event:any, link:string) {
  if(electron) {
      event.preventDefault()
      electron.shell.openExternal(link);
  }
}

function App(props:{
  locs:{[key:string]:Localization};
}) {
  const [current, setCurrent] = React.useState("Home");
  const [lang, setLang] = React.useState("en");

  return (
    <div className="App">
      <Router>
        <MenuComponent locs={props.locs[lang]} current={current} onClick={(place:string)=>setCurrent(place)}/>
        <Switch>
          <Route exact path="/">
            <HomeComponent locs={props.locs[lang]} />
          </Route>
          <Route path="/about">
            <AboutComponent locs={props.locs[lang]} />
          </Route>
          <Route path="/projects">
            <ProjectsComponent locs={props.locs[lang]} />
          </Route>
        </Switch>
        <div id="langMenu">
          <div className={lang === "en" ? "selected" : "unselected"} onClick={()=>{setLang("en");}}>English</div>
          <div className={lang === "fr" ? "selected" : "unselected"} onClick={()=>{setLang("fr");}}>Français</div>
        </div>
        <div id="metaFooter">
          <p>Made with <a className="link">React</a> and <a className="link">Typescript</a></p>
        </div>
      </Router>
    </div>
  );
}

export default App;
