import path from "path";
import {JsonFetcher} from "../api/interfaces";
import {Localization} from "../api/types";

export default class LocalizationsManager {

    constructor(private directory:string, private jsonFetcher:JsonFetcher) {}
  
    private getKeyAndLocalizationFromKey(key:string): Promise<{key:string,localization:Localization}> {
      return new Promise((resolve,reject)=>{
        this.jsonFetcher.getObjectFromFile(path.join(this.directory,key+'.json'))
        .then((loc:Localization)=>{
            resolve({key:key,localization:loc});
        })
        .catch(reason=>{reject(reason);}) 
      })
    }
  
    private getAvailableLocalizationsKeys(): Promise<string[]> {
      return new Promise((resolve,reject)=>{
        this.jsonFetcher.getObjectFromFile(path.join(this.directory,'metadata.json'))
        .then((metadata:any)=>{
            resolve(metadata.available);
        })
        .catch(reason=>{
            console.error(reason);
            reject(reason);
        })
      })
    }
  
    public getLocalizations(): Promise<{[key:string]:Localization}> {
      return new Promise((resolve, reject)=>{
        this.getAvailableLocalizationsKeys()
        .then(async (keys:string[])=>{
            let asyncFetches: any[] = [];
            keys.forEach(key=> {
                asyncFetches.push(this.getKeyAndLocalizationFromKey(key));
            })
            Promise.all(asyncFetches)
            .then(locsArray => {
                let locsDict:{[key:string]:Localization} = {};
                locsArray.map(val => locsDict[val.key] = val.localization);
                resolve(locsDict);
            })
            .catch(reason => {
                console.error(reason);
                reject(reason);
            })
        })
        .catch(reason=>{
            console.error(reason);
            reject(reason);
        })
      })
    }
  }