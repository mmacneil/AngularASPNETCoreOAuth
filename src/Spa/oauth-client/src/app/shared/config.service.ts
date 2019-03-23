import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
    _resourceApiURI: string;
 
    constructor() {
        this._apiURI = 'http://localhost:5000/api';
        this._resourceApiURI = 'http://localhost:5001/api';
     }
 
     getApiURI() {
         return this._apiURI;
     } 
     
     getResourceApiURI() {
        return this._resourceApiURI;
    }  
}