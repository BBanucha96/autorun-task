import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { GridComponent } from './grid/grid.component';
import { CommonModule } from '@angular/common';
import { TableModalComponent } from './table/modal/table-modal.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    DetailsComponent,
    TableComponent,
    TableModalComponent,
    GridComponent,
  ],
  declarations: [
    DetailsComponent,
    TableComponent,
    TableModalComponent,
    GridComponent,
  ],
  providers: [],
})
export class FeaturesModule {}
