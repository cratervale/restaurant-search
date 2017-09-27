import {search} from '../services/Search'
import lodash from 'lodash'

const initState ={
  results:{
    hits:[],
  },
  cuisineTypes :[],
  filters:[],
  currentSearch: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
const LOAD_RESULTS = 'LOAD_RESULTS'
const TOGGLE_CUISINE_FILTER = 'TOGGLE_CUISINE_FILTER'

// action creators
export const updateCurrent = (val) => (
  {type:CURRENT_UPDATE, payload: val}
)

const loadResults = (results) => ({type:LOAD_RESULTS, payload: results})

export const toggleCuisineFilter = () => {

}

const serializeFilters = () => {
  
}

export const liveSearch = (val, filter = [])=> {
  return (dispatch) => {
    dispatch(updateCurrent(val))
    search(val, filter)
      .then(results => dispatch(loadResults(results)))
  }
}

const countUniqueByFoodType = (data) => {
  const cuisines = lodash(data)
  .groupBy('food_type')
  .map(function(items, name) {
     return { name: name, count: items.length };
  }).value()

  return lodash.orderBy(cuisines, ['count', 'name'], ['desc'])
}


export default (state = initState, action) => {
  switch(action.type){
    case CURRENT_UPDATE:
      return {...state, currentSearch: action.payload}
    case LOAD_RESULTS:
      return {...state,
        cuisineTypes: countUniqueByFoodType(action.payload.hits),
        results: action.payload
      }
    default:
      return state
  }
}
