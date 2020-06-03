import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

 constructor() {
  this.sourceList = [];
  let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

  window.fetch(satellitesUrl).then(function(response) {
     response.json().then(function(data) {

        let fetchedSatellites = data.satellites;        
        for (let i = 0; i < fetchedSatellites.length; i++){
          this.sourceList.push(new Satellite (fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational));
        }

        console.log('sourceList: ', this.sourceList);

     }.bind(this));
  }.bind(this));

}

}
