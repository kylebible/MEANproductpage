import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { ProductsComponent } from "app/products/products.component";
import { NewItemComponent } from "app/new-item/new-item.component";
import { EditComponent } from "app/edit/edit.component";

const routes: Routes = [
  {path: '', children: [], component: HomeComponent},
  {path: 'products', children: [], component: ProductsComponent},
  {path: 'new_item', children: [], component: NewItemComponent},
  {path: 'edit/:id', children: [], component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
