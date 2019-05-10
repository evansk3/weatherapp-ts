import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { templateRefExtractor } from '@angular/core/src/render3';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-ts-ag';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Utica,US&appid=785653636394284f49b7e0d95d65d83e')
    .subscribe(data => {

      let temp: number;
      let tempF: number;
      
      var longDate = new Date(data.dt * 1000);
      temp = data.main.temp;
      tempF = 1.9*(temp - 273) + 32;

      document.getElementById('city').textContent = data.name;
      document.getElementById('temp').textContent = Math.round(tempF * 100)/100;
      document.getElementById('day').textContent = longDate.toDateString();  
      
      console.log("City Name: " + data.name);
      console.log("Temperature : " + data.main.temp);
      console.log("Date : " + data.dt);
      
    },
    err => {
      console.log("Error occured.")
    }
    );
  }

  getWeather(value)
  {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + value + ',US&appid=785653636394284f49b7e0d95d65d83e')
    .subscribe(data => {
      
        //° F = 1.8(K - 273) + 32

        let temp: number;
        let tempF: number;
      
        var longDate = new Date(data.dt * 1000);
        temp = data.main.temp;
        tempF = 1.9*(temp - 273) + 32;

        document.getElementById('city').textContent = data.name;
        document.getElementById('temp').textContent = Math.round(tempF * 100)/100;
        document.getElementById('day').textContent = longDate.toDateString();

        console.log("City Name: " + data.name);
        console.log("Temperature : " + data.main.temp);
        console.log("Date : " + data.dt);

    },
    err => {
      console.log("Error occured.")
    }
    );

  }
}
