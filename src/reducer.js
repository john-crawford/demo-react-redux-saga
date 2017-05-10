//handles state changes based on dispatched actions
export default function images(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_LOCATION':
      return {
        ...state, 
        city: action.location.city,
        stateCode: action.location.state
      }
    case 'RECEIVE_IMAGES':
      return {
        ...state, 
        images: action.images.slice(0,4)
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

//examples of some basic selectors used to retrieve state (not actually used)
export const getLocation = state => {state.city,state.stateCode}
export const getImages = state => state.images