import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData } from './store/products/products.actions';
import { IProductState } from './store/products/products.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IProductState>) {}

  ngOnInit() {
    this.store.dispatch(loadData());
  }
}
