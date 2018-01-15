import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroups from './radio-button-group';
import './index.css';

class NSRadioButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {selected: props.defaultSelected}
    RadioGroups.add(props.name, this);
  }
  setSelected(selected){
    selected && console.log(`${this.props.name} = ${this.props.label}`);
    this.setState({selected : selected});
  }

  onClick(groupName, component, e){
    RadioGroups.selectOption(groupName, component);
    this.props.onClick(e);
  }

  render(){
    return (
      <div style={this.props.inline ? {display: "inline"} : {}}>
        <div
            name="group-1"
            className={`ns-radio-button ${this.state.selected ? 'selected': ''} ${this.props.fancyBg && "show-fancy-bg"}`}
            onClick={(e)=>this.onClick(this.props.name, this, e)}>
            <div className="ns-radio-fancy-bg"></div>
            <div className="ns-radio-selection" >
              <span className="ns-radio-fill-circle"></span>
              <span className="ns-radio-void-circle"></span>
            </div>
            <div className="ns-radio-label">
              {this.props.label}
            </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<div>
  <NSRadioButton name="group-1" label="Option a-1" defaultSelected={true} onClick={()=>{console.log("group1, options-1, callback")}}/>
  <NSRadioButton name="group-1" label="Option a-2" defaultSelected={false} onClick={()=>{console.log("group1, options-2, callback")}}/>

  <NSRadioButton name="group-2" label="Option b-1" inline defaultSelected={false} fancyBg={true} onClick={()=>{console.log("group1, options-1, callback")}}/>
  <NSRadioButton name="group-2" label="Option b-2" inline defaultSelected={true}  fancyBg={true} onClick={()=>{console.log("group1, options-2, callback")}}/>

</div>, document.getElementById("root"));