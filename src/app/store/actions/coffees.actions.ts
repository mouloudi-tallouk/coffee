import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Coffee } from "src/app/shared/interfaces/coffee.interface";

enum CoffeesActionType {
  Loading = "[Coffees] Loading",
  LoadCoffeesSuccess = "[Coffees] Loaded Success",
  loadCoffeesFailure = "[Coffees] Loaded Failure",
}
export const loadingCoffees = createAction(
  CoffeesActionType.Loading
)
export const loadingCoffeesSuccees = createAction(
  CoffeesActionType.LoadCoffeesSuccess,
  props<{ response: Coffee[] }>()
)
export const loadingCoffeesFails = createAction(
  CoffeesActionType.loadCoffeesFailure,
  props<{ error: HttpErrorResponse }>()
)
