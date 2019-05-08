import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './users';
import { UserService } from './user.service';

@Component({
    // selector:'user-list',
    templateUrl:'./users-list.component.html',
    styleUrls:['./users-list.component.css']
})
export class UserListComponent{

    users:User[];

    constructor(private userService: UserService,
        private route: ActivatedRoute) { }


        ngOnInit():void{
            //we have to read the route parameters
            this.route.paramMap.subscribe((map)=>{
                let userId=Number(map.get("userId")); 
                console.log(userId); 
                this.userService.findUserById().subscribe((data)=>{
                    this.users=data;
    
                })  
            });
            
       
                
                
                }
   



    // users= [
    //     {
    //         "userId": 1,
    //         "userName": "Akshay"
    //     },
    //     {
    //         "userId": 2,
    //         "userName": "Abbas"
    //     },
    //     {
    //         "userId": 3,
    //         "userName": "Kapil"
    //     }
    // ]

}