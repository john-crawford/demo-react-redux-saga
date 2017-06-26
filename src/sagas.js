import { fork, call, take, put } from 'redux-saga/effects'
import {receiveLocation} from './actions'
import {getLocation} from './reducer'

//export action types for testing purposes
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const LOCATION_ERROR = 'LOCATION_ERROR';

//hits the ZipCodeAPI to get city and state for the given zip code
export const getCityState=(zip)=>{
  const zipClientKey='js-5tK0sJ4H6jKXvrCEXuur3kY2ciPEMmkRP5RiPWZVgKSMbvr90VA3gy6sRW6Dirv8'
  const zipUrl='https://www.zipcodeapi.com/rest/'+zipClientKey+'/info.json/'+zip+'/degrees'

  return fetch(zipUrl).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data
  }).catch(function() {
    console.log("Error getting location information");
  });
}

//Calls the Weather Underground API to get the forecast
export const getForecast=({city,state})=>{
  const wuKey='774ab6ad504410b3'
  const wuUrl='http://api.wunderground.com/api/'+wuKey+'/forecast/q/'+state+'/'+city.replace(' ','_')+'.json'
  return fetch(wuUrl).then(function(response) {
    return response.json();
  }).then(function(data) {
    return data
  }).catch(function() {
    console.log("Error getting images");
  });
}

//watches for the search action
export function* watchForZip() {
  while(true) {
    const action=yield take('SEARCH_ZIP');
    const location=yield call(getCityState,action.zip)
    if(location.error_code){
      yield put({type:LOCATION_ERROR})
    }else{
      yield put({type:RECEIVE_LOCATION,location})
      const forecast=yield call(getForecast, location)
      yield put({type:RECEIVE_FORECAST,forecast})  
    }
  }
}

//main function for the saga, you could fork multiple watchers here
export default function* sagaDriver() {
  yield fork(watchForZip)
}