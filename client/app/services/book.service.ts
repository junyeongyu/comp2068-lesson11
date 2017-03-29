import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//import { Book } from '../models/book';

@Injectable()
export class BookService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }
  
  getBooks(): Promise<any> {
    // get('/api', book, {headers: this.headers})
    return this.http
      .get('/api')
//      .map(res => res.json());
      .toPromise()
      .then(res => res.json()) // as Book)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}