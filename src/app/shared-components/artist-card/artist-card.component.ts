import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input() artist: any;
  constructor() { }

  ngOnInit(): void {
  }

}
