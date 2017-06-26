//handles state changes based on dispatched actions
export default (state={}, action) => {
  switch(action.type) {
    case 'RECEIVE_LOCATION':
      return {
        ...state, 
        location:{
          city: action.location.city,
          stateCode: action.location.state,
          latitude: action.location.lat,
          longitude: action.location.lng
        }
      }
    case 'LOCATION_ERROR':
      return {
        ...state, 
        location:{
          error: true,
        },
        forecast:null
      }
    case 'RECEIVE_FORECAST':
      return {
        ...state, 
        forecast: action.forecast.forecast.simpleforecast.forecastday
      }
    default:
      return state
  }
}

//example of some basic selector (not actually used in this code)
export const getLocation = state => {state.city,state.stateCode}
