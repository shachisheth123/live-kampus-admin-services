import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventService{
    baseUrl="/assets/jsondata/eventjson.json"

    constructor(private http:HttpClient){}

    
    findEvent():Observable<Event[]>{

        return this.http.get<Event[]>(this.baseUrl );

    }

    findEventById(): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl);
    }
}