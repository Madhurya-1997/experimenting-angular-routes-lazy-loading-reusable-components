import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      statValue: '22',
      statLabel: 'Faves'
    },
    {
      statValue: '31,200',
      statLabel: 'Views'
    },
    {
      statValue: '50',
      statLabel: 'Members'
    }
  ]

  items = [
    {
      itemImage: '/assets/images/couch.jpeg',
      itemTitle: 'Couch',
      itemDescription: 'A great couch to sit on.'
    },
    {
      itemImage: '/assets/images/dresser.jpeg',
      itemTitle: 'Couch',
      itemDescription: 'This is a great dresser to put stuff in'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
