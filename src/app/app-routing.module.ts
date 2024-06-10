import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAddressComponent } from './components/pages/search-address/search-address.component';

const routes: Routes = [
  { path: '', component: SearchAddressComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
