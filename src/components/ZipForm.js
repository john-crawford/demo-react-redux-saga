import React, {Component} from 'react'

export default class ZipForm extends Component{
  state={
    zip:null
  }

  handleChange=(event)=>{
    this.setState({zip:event.target.value})
  }

  handleClick=(event)=>{
    this.props.searchZip(this.state.zip)
  }

  render(){
    return(
      <div className="zip-form">
        <input 
          type="text" 
          placeholder="Zip Code"
          onChange={this.handleChange} 
          value={this.state.zip} />
        <button onClick={this.handleClick}>
          <span className="fa fa-search" />
        </button>
      </div>
    )
  }
}

