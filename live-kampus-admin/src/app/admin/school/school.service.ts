import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schools } from './school';
import { Observable } from 'rxjs';

@Injectable()
export class SchoolService {

    baseUrl="/assets/jsondata/schooljson.json"

    constructor(private http:HttpClient){}

    
    findSchool(category:string):Observable<Schools[]>{

        return this.http.get<Schools[]>(this.baseUrl  );

    }

    findSchoolById(schoolId:number): Observable<Schools[]> {
        return this.http.get<Schools[]>(this.baseUrl   );
    }

}