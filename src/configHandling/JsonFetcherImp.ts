import {JsonFetcher} from "../api/interfaces";

export default class JsonFetcherImp implements JsonFetcher {
    public getObjectFromFile(path:string): Promise<any> {
      return new Promise((resolve, reject)=> {
        if(!path.endsWith(".json") && !path.endsWith(".JSON")) {
          reject("The file needs to be a .json/.JSON file.")
        }
    
        fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            console.log(response);
            return response.json();
        })
        .then(json => {
            resolve(json);
        })
        .catch(reason => {
            reject(reason);
        })
      })
    }
  }