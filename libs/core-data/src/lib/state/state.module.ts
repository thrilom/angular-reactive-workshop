import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { reducers } from '.';
import { CustomersEffects } from './customers/customers.effects';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers), // take combined reducer and make it available
    StoreDevtoolsModule.instrument({ maxAge: 10 }), // Hooks into the redux dev tools in chrome
    EffectsModule.forRoot([
      CustomersEffects
    ]),
  ],
  declarations: []
})
export class StateModule { }
