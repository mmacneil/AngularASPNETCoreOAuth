import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

export abstract class BaseService {  
    
    baseUrl: string = '';

    constructor() { }

    protected handleError(error: any) {

    var applicationError = error.headers.get('Application-Error');

    // either applicationError in header or model error in body
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    
    var modelStateErrors: string = '';

      // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
      for (var key in error.error) {
        if (error.error[key]) modelStateErrors += error.error[key].description + '\n'; 
      }
      
    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return throwError(modelStateErrors || 'Server error');
  }
}