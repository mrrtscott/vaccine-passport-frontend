import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { VaccineService } from './services/vaccine.service';
import { Routes, RouterModule } from '@angular/router';
import { TravellerComponentComponent } from './components/traveller-component/traveller-component.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'vaccine-list', component:VaccineListComponent},
  {path:'traveller-information/:passportNumber', component: TravellerComponentComponent},
  {path:'traveller-information', component: TravellerComponentComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    VaccineListComponent,
    TravellerComponentComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    HttpClientModule
  ],
  providers: [VaccineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
