import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        return 'http://localhost:5000/api';
    }    
     
    get resourceApiURI() {
        return 'http://localhost:5050/api';
    }  
}