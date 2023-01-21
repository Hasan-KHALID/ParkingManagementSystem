import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  vehicle = [{
  licenseNumber: "182777",
  type: 'car',
  ownerName: 'khalid',
  ownerPhone:'02q928123',
  status:'good',
  ownerAdress:'dhaka',
  timeOfEntry:'12pm',
  timeOfExit:'1pm',
  parkingCharge:'20'
  },
  {
    licenseNumber: "1827asdas77",
    type: 'bus',
    ownerName: 'jack',
    ownerPhone:'02q928123',
    status:'good',
    ownerAdress:'dhaka',
    timeOfEntry:'12pm',
    timeOfExit:'1pm',
    parkingCharge:'20'
    },
]
}
