import React, {Component} from 'react'
export default class Images extends Component{
  render(){
    return(
      <div className="content-section">
        <div className="small-title">
          Getty Images
        </div>
        <div className="images">
          {this.props.imageList.map((image,index)=>{
            return(
              <img key={index} src={image.display_sizes[0].uri} className="images-slide" />
            )
          })}
        </div>
      </div>
    )
  }
}

