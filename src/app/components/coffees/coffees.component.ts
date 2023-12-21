import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from 'src/app/shared/interfaces/coffee.interface';
import { loadingCoffees } from 'src/app/store/actions/coffees.actions';
import { areCoffeesLoaded, coffeesEntities, CoffeesState, getApiError, getIsLoading } from 'src/app/store/reducers';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {
  loading: boolean = false;
  showCoffeeDetails: boolean = false;
  coffeeDetails: Coffee;
  coffees$: Observable<Coffee[]> | null = null;
  isLoading$: Observable<boolean | undefined> | undefined;
  apiError$: Observable<boolean | undefined> | undefined;
  loaded$: Observable<boolean | undefined> | undefined;

  constructor(private store: Store<CoffeesState>) {
    this.loaded$ =  this.store.pipe(select(areCoffeesLoaded));
    this.coffees$ = this.store.pipe(select(coffeesEntities));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.apiError$ = this.store.pipe(select(getApiError));
  }

  ngOnInit(): void {
    this.coffees$?.subscribe((res) => {
      console.log(res)
    })
    this.store.select(areCoffeesLoaded).subscribe(hasLoaded => {
      if (!hasLoaded) {
          this.store.dispatch(loadingCoffees());
        }
    })
  }

  showDetail(item: Coffee): void {
    console.log(item);
    this.coffeeDetails = item;
    this.showCoffeeDetails = true;
  }
}
