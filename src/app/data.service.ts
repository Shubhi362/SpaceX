import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MissionDetails} from "../app/Models/mission-details";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


  getAllData(){
     return  this.httpClient.get<MissionDetails[]>("https://api.spaceXdata.com/v3/launches?limit=100");
  }

  getDataByFilter(launchSuccess:boolean,landSuccess:boolean,launchYear:number){
    var url="https://api.spaceXdata.com/v3/launches?limit=100";
    if(launchSuccess){
      url+="&launch_success="+launchSuccess
    }
    if(landSuccess){
      url+="&land_success="+landSuccess
    }
    if(launchYear){
      url+="&launch_year="+launchYear
    }
    return  this.httpClient.get<MissionDetails[]>(url);
  }
}
