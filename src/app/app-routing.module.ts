import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CharacterDetailsContainerComponent
} from './character-details/containers/character-details-container/character-details-container.component';
import { CharacterListContainerComponent } from './character-list/container/character-list-container/character-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListContainerComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailsContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
