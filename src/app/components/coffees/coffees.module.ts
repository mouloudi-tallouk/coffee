import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesComponent } from './coffees.component';
import { SharedModule } from 'src/app/shared.module';
import { CoffeesService } from 'src/app/services/coffees.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoffeesEffect } from 'src/app/store/effects/coffees.effect';

const routes: Routes = [
  {
    path: '',
    component: CoffeesComponent,
  }
];

@NgModule({
  declarations: [
    CoffeesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature("coffee",reducers),
    EffectsModule.forFeature([CoffeesEffect])
  ],
  exports: [RouterModule],
  providers: [CoffeesService]
})
export class CoffeesModule { }
