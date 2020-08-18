import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import LocalizationsManager from './configHandling/LocalizationsManager';
import JsonFetcherImp from './configHandling/JsonFetcherImp';

//guide https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/

async function launch() {
  let localizationsManager = new LocalizationsManager("localizations",new JsonFetcherImp());
  localizationsManager.getLocalizations()
  .then(locs=>{
    console.log(locs);
    ReactDOM.render(
      <React.StrictMode>
        <App locs={locs}/>
      </React.StrictMode>, document.getElementById('root')
    );
  })
  .catch(reason=>console.log(reason));
}

launch()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
