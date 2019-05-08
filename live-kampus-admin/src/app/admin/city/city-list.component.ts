import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CityService } from './city.service';
import { City } from './city';
@Component({
    // tslint:disable-next-line:component-selector
    // selector: 'city-list',
    templateUrl: './city-list.component.html',
    styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
    closeResult: string;

    constructor(private modalService: NgbModal,private cityService: CityService,
      private route: ActivatedRoute) {}
  
    open(content: any,content1:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    open1(content1:any) {
      this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    citys:City[];
        ngOnInit():void{
            //we have to read the route parameters
            this.route.paramMap.subscribe((map)=>{
                let cityId=Number(map.get("cityId")); 
                console.log(cityId); 
                this.cityService.findCityById().subscribe((data)=>{
                    this.citys=data;
    
                })  
            });
            
       
                
                
                }
}
