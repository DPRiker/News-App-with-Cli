import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, URLSearchParams } from '@angular/http';
import { Article } from './article.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

    private articleUrl = 'app/articles';

  constructor(private http: Http) { }

  getArticles(): Promise<Article[]> {
    return this.http.get(this.articleUrl)
               .toPromise()
               .then(response => response.json().data as Article[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }


}