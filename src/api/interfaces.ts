export interface JsonFetcher {
    getObjectFromFile(path:string): Promise<any>;
}


