import React, {Component} from 'react'
import {connect} from 'react-redux';

//connects state to props
const mapStateToProps=(state)=> ({
  location: state.location
})

export class LocationInfo extends Component{
  render(){
    return(
      <div className="location-info">
        {do{
          if(this.props.location){
            if(this.props.location.error){
              <div className="error-title">
                Invalid Zip Code
              </div>
            }else{
              <div className="location-result">
                <div className="medium-title">
                  ZipCodeAPI Information
                </div>
                <div className="small-title">
                  <div>
                    Location: {this.props.location.city}, {this.props.location.stateCode}
                  </div>
                  <div>
                    Longitude: {this.props.location.longitude}
                  </div>
                  <div>
                    Latitude: {this.props.location.latitude}
                  </div>
                </div>
              </div>
            }
          }else{
            <div>
              Submit a zip code to see some basic location information and a weather forecast.
            </div>
          }
        }}
      </div>
    )
  }
}

export default connect(mapStateToProps,null)(LocationInfo)
