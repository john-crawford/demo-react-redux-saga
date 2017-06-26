import React, {Component} from 'react'
import {connect} from 'react-redux';

import ZipForm from './components/ZipForm'
import LocationInfo from './components/LocationInfo'
import Forecast from './components/Forecast'

//connects state to props
const mapStateToProps=(state)=> ({
  forecast:state.forecast
})

export class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="large-title">
          React/Redux/Saga Demo
        </div>
        <ZipForm searchZip={this.props.searchZip} />
        <LocationInfo />
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
export default connect(mapStateToProps,null)(App)