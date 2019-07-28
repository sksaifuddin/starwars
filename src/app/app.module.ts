import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { CharacterListContainerComponent } from './character-list/container/character-list-container/character-list-container.component';
import { CharacterDetailsContainerComponent } from './character-details/containers/character-details-container/character-details-container.component';
import { CharacterListComponentComponent } from './character-list/components/character-list-component/character-list-component.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListContainerComponent,
    CharacterDetailsContainerComponent,
    CharacterListComponentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
