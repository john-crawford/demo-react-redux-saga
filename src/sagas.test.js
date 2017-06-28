import { testSaga } from 'redux-saga-test-plan'
import { 
  getCityState,
  getImages,
  getForecast,
  watchForZip
} from './sagas'
import {
  receiveLocation,
  receiveForecast,
  locationError,
  RECEIVE_LOCATION,
  RECEIVE_IMAGES,
  RECEIVE_FORECAST,
  LOCATION_ERROR
} from './actions'
import sagaDriver from './sagas'

//Saga Demo test suite
describe('Saga Demo', () => { 

  it('should test the sagaDriver generator', () =>{
    //test the saga driver generator
    testSaga(sagaDriver)
      .next()
      .fork(watchForZip)
      .next()
      .isDone()
  })

  it('should test the watchForZip generator', () =>{
    //mock data to use in the test
    const action={zip:'01945'}
    const location={
      city:'Marblehead',
      state:'MA'
    }
    const locationErr={
      error_code:'404'
    }
    const forecast={'temp':'63'}
    const images={images:['a','b','c']}

    //test the generator function that watches for Zip code searches
    const test=testSaga(watchForZip,{zip:'01945'})
      .next()
      .take('SEARCH_ZIP')
      .next(action)
      .call(getCityState,action.zip)
      .save('before-if')
      .next(location)
      .put({type:RECEIVE_LOCATION,location})
      .next()
      .call(getForecast, location)
      .next(forecast)
      .put({type:RECEIVE_FORECAST,forecast})

    //check error path in the saga  
    test.restore('before-if')
      .next(locationErr)
      .put({type:LOCATION_ERROR})
  })
})