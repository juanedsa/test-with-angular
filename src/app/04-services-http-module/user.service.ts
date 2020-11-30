import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = [];
  public error = false;

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): void {
    this.http.get<any[]>(this.url).subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
