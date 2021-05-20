import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true, socialSecurityNumber: 584272910 },
    { name: 'George', age: 25, job: 'Engineer', employed: false, socialSecurityNumber: 678593011 },
    { name: 'Kim', age: 22, job: 'Engineer', employed: true, socialSecurityNumber: 909341752 }
  ]

  tableHeaders = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
