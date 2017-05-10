import React, {Component} from 'react'

export default class LocationInfo extends Component{
  render(){
    return(
      <div className="location-info">
        {do{
          if(this.props.city && this.props.stateCode){
            <div>
              <div className="small-title">
                Location: {this.props.city}, {this.props.stateCode}
              </div>
            </div>
          }else{
            <div className="large-title">
              Enter a Zip Code
            </div>
          }
        }}
      </div>
    )
  }
}