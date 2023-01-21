import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  vehicle = [{
  licenseNumber: "asa",
  type: 'string',
  ownerName: 'string',
  ownerPhone:'string',
  status:'string',
  ownerAdress:'string',
  timeOfEntry:'string',
  timeOfExit:'string',
  parkingCharge:'string'
  }]
}
