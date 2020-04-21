import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Image} from './average-color.component';

@Injectable({providedIn: 'root'})
export class AvgColorsService {

  private URL = 'http://localhost:8071/api/v1/test/results';

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.URL);
  }
}
