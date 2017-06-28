# demo-react-redux-saga

## Description
This project is meant to serve as a basic demonstration of the use and testability of [redux-saga](https://github.com/redux-saga/redux-saga). In this project you will submit a US Zip code. The app will first hit ([ZipCodeAPI](http://www.zipcodeapi.com)) to get location information and then grab the weather forecast ([Weather Underground](https://www.wunderground.com/weather/api/)).

## Installation
These instructions require that you have `npm` and `git` installed.

### Clone the repo
```
git clone https://github.com/john-crawford/demo-react-redux-saga.git
cd demo-react-redux-saga
```

### Install modules
```
npm install
```

### Start the server
```
npm start
```

## Usage
Once the server is running, just go to `https://localhost:8888` in your web browser. 

## Testing is Important
Like the description says, this is a demo of the use and testability of redux-saga. These tests are written using [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan) and run with [Jest](https://facebook.github.io/jest/). To run the tests just...
```
npm test
```

## Files
All files are in `src/`...

- `actions.js`: contains action creators
- `App.js`: primary component for the app
- `index.html`: load file served in the browers
- `main.js`: primary JS file (creates store, loads middleware and runs app)
- `reducer.js`: contains state management functionality
- `sagas.js`: contains generators and API fetch functions
- `sagas.test.js`: contains tests
- `styles.css`: stylesheet for the app
- `components/`: contains the React components 
  - `LocationInfo.js`: Displays the location information
  - `Forecast.js`: Displays the forecast
  - `ZipForm.js`: Displays the location information

