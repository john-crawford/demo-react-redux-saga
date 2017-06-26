import React, {Component} from 'react'

export default class Forecast extends Component{
  render(){
    return(
      <div className="forecast-container">
        <div className="medium-title">
          Weather Underground Forecast
        </div>
        <div className="forecast">
          {this.props.forecast.map((entry,index)=>{
            return(
              <div key={index} className="forecast-cell">
                <div className="title">
                  <div>
                    {entry.date.weekday} 
                  </div>              
                  <div>
                    {entry.date.monthname+' '+entry.date.day}
                  </div>   
                </div>              
                <div className="temp">
                  <div className="high">
                    High: {entry.high.fahrenheit}
                  </div>   
                  <div className="low">
                    Low: {entry.low.fahrenheit} 
                  </div>  
                </div>
                <div className="icon">
                  <img src={entry.icon_url} />
                  <span className="conditions">
                    {entry.conditions}
                  </span>
                </div>
              </div>
            )
          })}
        </div>  
      </div>
    )
  }
}

