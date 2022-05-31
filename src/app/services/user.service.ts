import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User_reg } from '../interfaces/user_reg';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:8000/users"
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User_reg[]> {
    return this._http.get<User_reg[]>(this.url)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  getUserById(id: any): Observable<User_reg[]> {
    return this._http.get<User_reg[]>(`${this.url}/${id}`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message)
    )
  }
}

