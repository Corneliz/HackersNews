import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { hackerNew } from '../models/hackerNew';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) {


  }
  getNews(query: string, page: string): Observable<hackerNew> {
    return this.http.get<hackerNew>(environment.url +
      "/api/v1/search_by_date?query=" + query + "&page=" + page, httpOptions);
  }
}
