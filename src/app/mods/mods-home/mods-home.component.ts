import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal = false;

  list = [
    {
      question: ' What is a dog?',
      answer: 'A dog is a type of domesticated animal. It is known for its loyalty and faithfulness.'
    },
    {
      question: 'What kinds of dogs are there?',
      answer: 'There are many breeds of dogs. Each breed varies in size and temperament.'
    },
    {
      question: 'How do you acquire a dog?',
      answer: 'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.showModal = !this.showModal
  }


}
