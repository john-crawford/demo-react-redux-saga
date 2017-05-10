import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import  * as Actions from './actions.js';

import ZipForm from './components/ZipForm'
import LocationInfo from './components/LocationInfo'
import Images from './components/Images'
import Forecast from './components/Forecast'

//connects state to props
const mapStateToProps=(state)=> ({
  city: state.city,
  stateCode: state.stateCode,
  images: state.images,
  forecast:state.forecast
})

//binds action creators to dispatch and connects to props
const mapActionCreatorsToProps=(dispatch)=> bindActionCreators(Actions, dispatch)

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ZipForm searchZip={this.props.searchZip} />
        <LocationInfo city={this.props.city} stateCode={this.props.stateCode} />
        {do{
          if(this.props.images){
            <Images imageList={this.props.images} />
          }
        }}
        {do{  
          if(this.props.forecast){
            <Forecast forecast={this.props.forecast} />
          }
        }}
      </div>
    )
  }
}

//exports connected version of the App component
export default connect(mapStateToProps,mapActionCreatorsToProps)(App)