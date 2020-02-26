import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  person;
  constructor() { }

  ngOnInit() {
  }

}