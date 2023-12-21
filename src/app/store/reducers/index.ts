import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromAPI from './api.reducer'
import * as fromCoffe from './coffees.reducer'
import { adapter } from './coffees.reducer'

export interface CoffeesState{
  coffee:fromCoffe.State
  api: fromAPI.State
}

const featureSelector = createFeatureSelector<CoffeesState>("coffee")
const coffeesSelector = createSelector(featureSelector,x=>x.coffee)
const apiSelector = createSelector(featureSelector,x=>x.api)


const {selectAll, selectEntities,selectIds,selectTotal}  = adapter.getSelectors(coffeesSelector);

export const coffeesEntities = selectAll;

export const getIsLoading = createSelector(
  apiSelector,
  fromAPI.isLoading
)
export const getApiError = createSelector(
  apiSelector,
  fromAPI.error

)

export const areCoffeesLoaded = createSelector(
  apiSelector,
  fromAPI.loaded
)

export function reducers(state:CoffeesState, action: Action):any{
  return combineReducers(
    {
    coffee:fromCoffe.reducer,
    api:fromAPI.reducer
  })(state,action)
}
