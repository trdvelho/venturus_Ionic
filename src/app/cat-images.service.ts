import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.imgur.com/3/gallery/search/?q=cats';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Client-ID 1ceddedc03a5d71'
  })
};


@Injectable({
  providedIn: 'root'
})


export class CatImagesService {

  constructor(private http: HttpClient) {
  }

  getCats(): Observable<any> {
    console.log('Service working');
    return this.http.get(API_URL, httpOptions)
    .pipe(
      map((res: any) => {
        //console.log('Cats.. ', res));
        return res.data;
      })
    );
  }
}

