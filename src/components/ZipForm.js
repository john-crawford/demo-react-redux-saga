import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchZip} from '../actions.js';

//connects state to props
const mapStateToProps=(state)=> ({
  location: state.location
})

//binds action creators to dispatch and connects to props
const mapActionsToProps=(dispatch)=> bindActionCreators({searchZip}, dispatch)

export class ZipForm extends Component{
  state={
    zip:''
  }

  handleClick=()=>{
    this.props.searchZip(this.state.zip)
  }

  handleKeyDown=(event)=>{
    const code=event.keyCode
    const key=event.key

    if(code===13){
      this.handleClick()
    }else if(code===8){
      this.setState({zip:this.state.zip.slice(0,-1)})
    }else if(this.state.zip.length>=5){
      this.setState({zip:this.state.zip})
    }else if(!isNaN(key)){
      this.setState({zip:this.state.zip+key})
    }else{
      this.setState({zip:this.state.zip})
    }
  }

  render(){
    return(
      <div className="zip-form">
        <input 
          type="text" 
          placeholder="Zip Code"
          onKeyDown={this.handleKeyDown} 
          value={this.state.zip} 
        />
        <button onClick={this.handleClick}>
          <span className="fa fa-search" />
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapActionsToProps)(ZipForm)