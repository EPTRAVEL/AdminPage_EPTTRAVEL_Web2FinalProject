import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Tour } from '../interfaces/tour';

@Injectable({
  providedIn: 'root'
})
export class UpdateTourService {
  url: string = "http://localhost:8000/Tours"
  constructor(private _http: HttpClient) { }

  getTours(): Observable<Tour[]> {
    return this._http.get<Tour[]>(this.url)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message)
    )
  }
}
