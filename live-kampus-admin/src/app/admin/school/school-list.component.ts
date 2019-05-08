import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Schools } from './school';
import { SchoolService } from './school.service';
import { ActivatedRoute } from '@angular/router';


@Component({
   // selector:"school-list",
    templateUrl:"./school-list.component.html",
    styleUrls:["./school-list.component.css"]
})
export class SchoolListComponent implements OnInit
{

    schools:Schools[];

    constructor(private schoolService: SchoolService,
        private route: ActivatedRoute) { }


        ngOnInit():void{
            //we have to read the route parameters
            this.route.paramMap.subscribe((map)=>{
                let schoolId=Number(map.get("schoolId")); 
                console.log(schoolId); 
                this.schoolService.findSchoolById(schoolId).subscribe((data)=>{
                    this.schools=data;
    
                })  
            });
            
       
                
                
                }
   
   
    // schools= [
    //     {
    //         "schoolId": 101,
    //         "name": "DYPCOE"
    //     },
    //     {
    //         "schoolId": 102,
    //         "name": "DYP"
    //     },
    //     {
    //         "schoolId": 103,
    //         "name": "TIT"
    //     }]
        
        
        
    
        


}