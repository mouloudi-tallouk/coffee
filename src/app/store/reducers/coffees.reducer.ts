import { createEntityAdapter, EntityAdapter, EntityState, } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Coffee } from "src/app/shared/interfaces/coffee.interface";
import * as coffeesActions from "../actions/coffees.actions";

export interface State extends EntityState<Coffee>{
  selectedCoffeeId:Number|undefined;
}

export const adapter: EntityAdapter<Coffee> = createEntityAdapter<Coffee>({
    selectId:x=>x.id,
    sortComparer:false
})

const initialState :State = adapter.getInitialState({
  selectedCoffeeId:undefined
})

export const reducer = createReducer(
  initialState,
  on(coffeesActions.loadingCoffeesSuccees,(state,{response})=>{
    return adapter.setAll(response,state);
  })
)


export const selectId = (state:State)=> state.selectedCoffeeId;
