import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageSearchComponent } from './components/page-search/page-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PageListComponent },
  { path: 'search', component: PageSearchComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
