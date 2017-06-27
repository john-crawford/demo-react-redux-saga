//action to search for a zip code
export const SEARCH_ZIP='SEARCH_ZIP';
export function searchZip(zip) {
  return {
    type: SEARCH_ZIP,
    zip
  }
}

//action to receive location information
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export function receiveLocation(location) {
  return {
    type: RECEIVE_LOCATION,
    location
  }
}

//action to handle a location API error
export const LOCATION_ERROR = 'LOCATION_ERROR';
export function locationError() {
  return {
    type: LOCATION_ERROR
  }
}

//action to receive forecast information
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export function receiveForecast(forecast) {
  return {
    type: RECEIVE_FORECAST,
    forecast
  }
}
