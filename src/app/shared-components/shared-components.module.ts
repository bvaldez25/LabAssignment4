import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarProductCardComponent } from './similar-product-card/similar-product-card.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtWorkCardComponent } from './art-work-card/art-work-card.component';



@NgModule({
  declarations: [
    SimilarProductCardComponent,
    ArtistCardComponent,
    ArtWorkCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimilarProductCardComponent,
    ArtistCardComponent,
    ArtWorkCardComponent
  ]
})
export class SharedComponentsModule { }
