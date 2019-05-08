import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users';

@Injectable()
export class UserService{

    baseUrl="/assets/jsondata/userjson.json"

    constructor(private http:HttpClient){}

    
    findUser():Observable<User[]>{

        return this.http.get<User[]>(this.baseUrl);

    }

    findUserById(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }
}