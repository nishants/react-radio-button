import React from 'react';
import RadioGroups from './radio-button-group';
import './ns-radio-button.css';

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
              <span className="ns-radio-outer-circle"></span>
              <span className="ns-radio-inner-circle"></span>
            </div>
            <div className="ns-radio-label">
              {this.props.label}
            </div>
          </div>
        </div>
    );
  }
}

export default NSRadioButton;