import {search} from '../services/Search'
import lodash from 'lodash'

const initState ={
  results:{
    hits:[],
  },
  cuisineTypes :[],
  filters:[],
  latLng: '40.7128, 74.0059',
  currentSearch: '',
  visibilityFilter: '',
  limit: 20
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
const LOAD_RESULTS = 'LOAD_RESULTS'
const SHOW_MORE = 'SHOW_MORE'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SET_LAT_LNG = 'SET_LAT_LNG'

// action creators
export const updateCurrent = (val) => (
  {type:CURRENT_UPDATE, payload: val}
)

export const setLatLng = (position) => (
  {type: SET_LAT_LNG, payload: `${position.coords.latitude}, ${position.coords.longitude}`}
)

const loadResults = (results) => ({type:LOAD_RESULTS, payload: results})
const setVisibilityFilter = (filter) => ({type:SET_VISIBILITY_FILTER, payload: filter})
const moreResults = (limit) => ({type:SHOW_MORE, payload: limit})

export const filterByCuisineType = (restaurants,type) => {
  return restaurants.filter(r => 'food_type' === type)
}

export const showMore = () => {
  console.log("show more")
  return(dispatch, getState) =>{
    const {val, latLng} = getState().search
    let {limit} = getState().search
    limit += 20
    console.log(limit)
    dispatch(moreResults(limit))
    search(val, limit, latLng)
      .then(results=> dispatch(loadResults(results)))
  }
}

export const setVisible = (filter) =>{
  return (dispatch) =>{
    dispatch(setVisibilityFilter(filter))
  }
}

export const getVisibleRestaurants = (restaurants, filter) =>{
  if(filter.length > 0) {return restaurants.filter(r => r.food_type === filter || parseFloat(r.stars_count) >= filter || lodash.includes(r.payment_options, filter))}
  return restaurants
}

// const serializeFilters = () => {}

export const liveSearch = (val)=> {
  return (dispatch, getState) => {
    dispatch(updateCurrent(val))
    const {latLng, limit} = getState().search
    search(val, limit, latLng)
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
        results: action.payload,
        visibilityFilter: ''
      }
    case SHOW_MORE:
      return {...state}
    case SET_LAT_LNG:
      return {...state, latLng: action.payload}
    case SET_VISIBILITY_FILTER:
      return {...state, visibilityFilter: action.payload}
    default:
      return state
  }
}
