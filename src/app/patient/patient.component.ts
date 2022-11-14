import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient = new Patient();

  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>('https://localhost:44333/weatherforecast')
                    .subscribe(res =>{
                      console.log(res);
                    },
                    err => {
                      console.log(err);
                    });
  }

  addPatient(){
    console.log(this.patient)
  }
  onGenderChange(event: Event){
    if(event){
      this.patient.pGender = (event.target as HTMLInputElement).value;
    }
  }

}
