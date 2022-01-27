import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BestGenreComponent} from "./best-genre/best-genre.component";
import {BestListComponent} from "./best-list/best-list.component";
import {BestProductComponent} from "./best-product/best-product.component";

/**
 * Routes used in application ie. www.all-best-front.com/genre
 * @type {({path: string, component: BestGenreComponent} | {path: string, component: BestListComponent} | {path: string, component: BestProductComponent})[]}
 * @author Jakub Kowalewski
 */
const routes: Routes = [
  {
    path: 'genre',
    component: BestGenreComponent
  },
  {
    path: 'list',
    component: BestListComponent
  },
  {
    path: 'product',
    component: BestProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
