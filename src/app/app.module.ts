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
import { CharacterFilterContainerComponent } from './character-filter/container/character-filter-container/character-filter-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterListComponentComponent } from './character-filter/components/filter-list-component/filter-list-component.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListContainerComponent,
    CharacterDetailsContainerComponent,
    CharacterListComponentComponent,
    CharacterFilterContainerComponent,
    FilterListComponentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
