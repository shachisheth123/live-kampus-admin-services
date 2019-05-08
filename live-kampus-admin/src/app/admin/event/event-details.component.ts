import { Component } from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRoute } from '@angular/router';

@Component({

    //selector: 'event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponents {

   
    events:Event[];

    constructor(private eventService:EventService,
        private route: ActivatedRoute) { }


        ngOnInit():void{
            //we have to read the route parameters
            this.route.paramMap.subscribe((map)=>{
                let eventId=Number(map.get("eventId")); 
                console.log(eventId); 
                this.eventService.findEventById().subscribe((data)=>{
                    this.events=data;
    
                })  
            });
            
       
                
                
                }
   
    

}