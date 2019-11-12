import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://my-json-server.typicode.com/volkz/technical-form/users';
  }

  // Método para recuperar todos los usuarios
  getAll(): Promise<User[]> {
    return this.http.get<User[]>(this.baseUrl).toPromise();
  }

  // Método para crear un nuevo usuario a partir de los datos del formulario de creación
  create(values): Promise<User> {
    return this.http.post<User>(this.baseUrl, values).toPromise();
  }

  // Método para borrar un usuario recibido por parámetro
  delete(user): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        userId: user._id
      }
    };
    return this.http.delete<User>(this.baseUrl, httpOptions).toPromise();
  }

  // Método que recibe userId con el id del usuario a editar y values con los nuevos datos del usuario
  update(userId, values): Promise<User> {
    values.userId = userId;
    return this.http.put<User>(this.baseUrl, values).toPromise();
  }

  // Método para recuperar un usuario a partir de su Id
  getById(userId): Promise<User> {
    return this.http.get<User>(this.baseUrl + '/' + userId).toPromise();
  }


}
