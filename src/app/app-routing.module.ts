import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './features/grid/grid.component';
import { TableComponent } from './features/table/table.component';
import { DetailsComponent } from './features/details/details.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'grid/details/:id', component: DetailsComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: '**', redirectTo: '/grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
