import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-art-work-card',
  templateUrl: './art-work-card.component.html',
  styleUrls: ['./art-work-card.component.css']
})
export class ArtWorkCardComponent implements OnInit {

  @Input() artwork: any;
  constructor() { }

  ngOnInit(): void {
  }

}
