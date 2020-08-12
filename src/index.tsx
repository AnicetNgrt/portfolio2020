import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

//guide https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/

declare global {
  type Locs = { [key: string]: string }
}

async function launch() {

  // initialising public/moddable local data
  let locs:{[key:string]:Locs} = {};
  let locSettings = await (await fetch('translations/metadata.json')).json();
  for (var lang of locSettings["available"]) {
    locs[lang] = await (await fetch('translations/'+lang+'.json')).json();
  }
  console.log(locs);
  ReactDOM.render(
    <React.StrictMode>
      <App locs={locs}/>
    </React.StrictMode>, document.getElementById('root')
  );
}

launch()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
