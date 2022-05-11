import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './layouts/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./layouts/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
