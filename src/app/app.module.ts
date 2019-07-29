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
import { FilterDropdownComponentComponent } from './character-filter/components/filter-dropdown-component/filter-dropdown-component.component';
import { CharacterDetailComponentComponent } from './character-details/components/character-detail-component/character-detail-component.component';
import { FilterBirthyearComponentComponent } from './character-filter/components/filter-birthyear-component/filter-birthyear-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListContainerComponent,
    CharacterDetailsContainerComponent,
    CharacterListComponentComponent,
    CharacterFilterContainerComponent,
    FilterListComponentComponent,
    FilterDropdownComponentComponent,
    CharacterDetailComponentComponent,
    FilterBirthyearComponentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
