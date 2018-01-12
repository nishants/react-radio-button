import React from 'react';
import ReactDOM from 'react-dom';

class NSRadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {selected: props.defaultChecked}
  }

  onClick(e){
    console.log("I am selected : "+this.props.label);
    this.props.onClick(e);
  }

  render(){
    return <div className="ns-radio-button" onClick={(e)=>this.onClick(e)}>{this.props.label}</div>
  }

}

ReactDOM.render(<NSRadioButton label="Option 1" defaultSelected={false} onClick={()=>{console.log("yeah, it called the on click param")}}/>, document.getElementById("root"));