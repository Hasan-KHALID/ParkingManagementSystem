import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.css']
})
export class VehicleInformationComponent {
}
