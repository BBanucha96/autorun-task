import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PRODUCTS_FEATURE_KEY } from './store/products/products.state';
import { ProductsEffects } from './store/products/products.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(PRODUCTS_FEATURE_KEY, productsReducer),
    EffectsModule.forRoot([ProductsEffects]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
