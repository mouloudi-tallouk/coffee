import { Injectable } from "@angular/core";

import { Action } from '@ngrx/store'
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, Observable, of, switchMap, tap } from "rxjs";
import { loadingCoffees,loadingCoffeesSuccees,loadingCoffeesFails } from "../actions/coffees.actions";
import { Coffee } from "src/app/shared/interfaces/coffee.interface";
import { CoffeesService } from "src/app/services/coffees.service";

@Injectable()
export class CoffeesEffect{
  constructor(private coffeesService: CoffeesService, private action$:Actions){}

  getCoffees$ = createEffect(
    (): Observable<Action> =>
          this.action$.pipe(ofType(loadingCoffees),
          exhaustMap(()=>{
            return this.coffeesService.getCoffees().pipe(
              map((response) => loadingCoffeesSuccees({response})),
              catchError((error) => of(loadingCoffeesFails({error})))
            )
            })
    )
  );

  afterGetCoffees$ = createEffect((): Observable<Action> => this.action$.pipe(ofType(loadingCoffeesSuccees), tap((response)=>console.log(response))), {dispatch:false});

}
