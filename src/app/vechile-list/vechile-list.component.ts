import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechile-list',
  templateUrl: './vechile-list.component.html',
  styleUrls: ['./vechile-list.component.css']
})
export class VechileListComponent implements OnInit {

  isFetching: boolean = false;

  constructor(public vehicle: VehicleService){

   console.log(this.vehicle.vehicle)  

  }
  ngOnInit(): void {
    
  }

  

  //   fetchProducts(){
  //   this.isFetching= true
  //   this.http.get('https://parking-78600-default-rtdb.firebaseio.com/vehicle.json'
  //   ).pipe(map((res)=>{
  //     const vechile = []
  //     for(const key in res){
  //       if(res.hasOwnProperty(key)){
  //         vechile.push({...res[key],id: key})
  //       }
  //     }
  //     return vechile
  //   }))
  //   .subscribe((vechile)=>{
  //     console.log(vechile)
  //     this.allVechile = vechile
  //     this.isFetching =false
  //   })
  // }

}
