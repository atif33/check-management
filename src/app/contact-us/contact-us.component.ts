import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {ContactService} from '../_service/contact.service';
import {Contact} from '../_model/Contact';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

declare var google;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  formContact: FormGroup;
  bounds = null;

  constructor(private mapsAPILoader: MapsAPILoader,
              private formBuilder: FormBuilder,
              private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.googleMap();
    this.createForm();
  }

  mapReady(map) {
    map.fitBounds(this.bounds);
  }

  googleMap() {
    this.mapsAPILoader.load().then(() => {
      this.bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(34.0277247, -5.0288367), // SW
        new google.maps.LatLng(51.891257, 0.559417) // NE
      );
    });
  }

  onSubmit() {
    let contact;
    contact = new Contact(this.formContact.controls.company.value, this.formContact.controls.email.value,
      this.formContact.controls.mobile.value, this.formContact.controls.message.value);
    this.contactService.newContact(contact).subscribe();
  }

  createForm() {
    this.formContact = this.formBuilder.group({
      company: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
      message: [null, Validators.required]

    });
  }
}
