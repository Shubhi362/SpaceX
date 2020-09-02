import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launchSuccess: boolean;
  landSuccess: boolean;
  launchYear: number;
  allSpaceXData;
  allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  applyFilterByYear(year) {
    this.launchYear = year;
    for (var i of this.allYears) {
      document.getElementById(i.toString()).style.backgroundColor = "lightgreen";
    }
    document.getElementById(year).style.backgroundColor = "yellow";

    this.getAllFilteredData()
  }

  applyFilterLaunch(launch) {
    this.launchSuccess = launch
    if (launch) {
      document.getElementById("launch_false").style.backgroundColor = "lightgreen";
      document.getElementById("launch_true").style.backgroundColor = "yellow";
    }
    else {
      document.getElementById("launch_true").style.backgroundColor = "lightgreen";
      document.getElementById("launch_false").style.backgroundColor = "yellow";
    }
    this.getAllFilteredData()

  }
  applyFilterLand(land) {
    this.landSuccess = land
    if (land) {
      document.getElementById("land_false").style.backgroundColor = "lightgreen";
      document.getElementById("land_true").style.backgroundColor = "yellow";
    }
    else {
      document.getElementById("land_true").style.backgroundColor = "lightgreen";
      document.getElementById("land_false").style.backgroundColor = "yellow";
    }
    this.getAllFilteredData()
  }
  

  getAllData() {
    this.dataService.getAllData().subscribe(data => {
      this.allSpaceXData = data;
      console.log(this.allSpaceXData);
    },
      error => {
        alert("something went wrong")
      })
  }

  getAllFilteredData() {
    this.dataService.getDataByFilter(this.launchSuccess, this.landSuccess, this.launchYear).subscribe(data => {
      this.allSpaceXData = data;
      console.log(this.allSpaceXData);
    },
      error => {
        alert("something went wrong")
      })
  }
}
