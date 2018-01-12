import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroups from './radio-button-group';

class NSRadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {selected: props.defaultChecked}
    RadioGroups.add(props.name, this);
  }
  setSelected(selected){
    console.log(selected ? "I am selected : "+this.props.label: `I am unselected : ${this.props.label}`);
    this.setState({selected : selected});
  }

  onClick(groupName, component, e){
    RadioGroups.selectOption(groupName, component);
    this.props.onClick(e);
  }

  render(){
    return (
        <div
            name="group-1"
            className="ns-radio-button"
            onClick={(e)=>this.onClick(this.props.name, this, e)}>{this.props.label}
        </div>
    );
  }
}

ReactDOM.render(<div>
  <NSRadioButton name="group-1" label="Option a-1" defaultSelected={false} onClick={()=>{console.log("group1, options-1, callback")}}/>
  <NSRadioButton name="group-1" label="Option a-2" defaultSelected={false} onClick={()=>{console.log("group1, options-2, callback")}}/>

  <NSRadioButton name="group-2" label="Option b-1" defaultSelected={false} onClick={()=>{console.log("group1, options-1, callback")}}/>
  <NSRadioButton name="group-2" label="Option b-2" defaultSelected={false} onClick={()=>{console.log("group1, options-2, callback")}}/>

</div>, document.getElementById("root"));