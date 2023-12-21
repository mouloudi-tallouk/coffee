import { createReducer, on } from "@ngrx/store";
import * as coffeesActions from "../actions/coffees.actions";

export interface State {
  isLoading: boolean | undefined;
  loaded: boolean | undefined;
  error: boolean | undefined;
}

const initialState : State={
  isLoading:false,
  loaded:false,
  error:false

}

export const reducer = createReducer(
  initialState,
  on(coffeesActions.loadingCoffees,(state,action)=>{
    return {
      ...state,
      loaded:false,
      isLoading:true
    }
  }),
  on(coffeesActions.loadingCoffeesFails,(state,{error})=>{
    return {
      ...state,
      isLoading:false,
      loaded:false,
      error:true
    }
  }),
  on(coffeesActions.loadingCoffeesSuccees,(state)=>{
    return {
      ...state,
      isLoading:false,
      loaded:true,
      error:undefined
    }
  }))

  export const isLoading = (state: State)=> state.isLoading;
  export const error = (state: State)=> state.error;
  export const loaded = (state:State)=>state.loaded;
