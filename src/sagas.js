import { fork, call, take, put } from 'redux-saga/effects'
import {receiveLocation} from './actions'
import {getLocation} from './reducer'

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

//hits the ZipCodeAPI to get city and state for the given zip code
export const getCityState=(zip)=>{
  const zipClientKey='js-5tK0sJ4H6jKXvrCEXuur3kY2ciPEMmkRP5RiPWZVgKSMbvr90VA3gy6sRW6Dirv8'
  const zipUrl='https://www.zipcodeapi.com/rest/'+zipClientKey+'/info.json/'+zip+'/degrees'

  return fetch(zipUrl).then(function(response) {
    return response.json();
  }).then(function(data) {
    return data
  }).catch(function() {
    console.log("Error getting location information");
  });
}

//Calls the Getty Image API to get some images of the location
export const getImages=({city,state})=>{
  const imgKey='vypbagk2dd3xtzw92gamrf4z'
  const imgUrl='https://api.gettyimages.com/v3/search/images?fields=thumb&sort_order=best&phrase='+city+' '+state
  return fetch(imgUrl,{
    headers:{
      'Api-Key':imgKey
    }
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    return data.images
  }).catch(function() {
    console.log("Error getting images");
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
    yield put({type:RECEIVE_LOCATION,location})
    const images=yield call(getImages, location)
    yield put({type:RECEIVE_IMAGES,images})
    const forecast=yield call(getForecast, location)
    yield put({type:RECEIVE_FORECAST,forecast})  
  }
}

//main function for the saga, you could fork multiple watchers here
export default function* sagaDriver() {
  yield fork(watchForZip)
}