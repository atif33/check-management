import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';

declare var google;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  bounds = null;

  constructor(private mapsAPILoader: MapsAPILoader) {
    this.mapsAPILoader.load().then(() => {
      this.bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(51.130739, -0.868052), // SW
        new google.maps.LatLng(51.891257, 0.559417) // NE
      );
    });
  }

  ngOnInit(): void {
  }

  mapReady(map) {
    map.fitBounds(this.bounds);
  }
}
