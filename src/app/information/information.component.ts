import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

constructor(private http: HttpClient, public vehicle: VehicleService){

}
  onProductCreate(info: {
    licenseNumber: string,
    type: string,
    ownerName: string,
    ownerPhone:string,
    status:string,
    ownerAdress:string,
    timeOfEntry:string,
    timeOfExit:string,
    parkingCharge:string
  }){
    const header = new HttpHeaders({'myHeader': 'testing'})
    this.http.post('https://parking-78600-default-rtdb.firebaseio.com/vehicle.json',info, {headers: header})
    .subscribe((res)=>{
      console.log(res)
    })
    this.vehicle.vehicle.push(info)

  }

}
