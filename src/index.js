import React from 'react';
import ReactDOM from 'react-dom';
import NSRadioButton from './ns-radio-button/ns-radio-button';

ReactDOM.render(<div>
  <NSRadioButton name="group-1" label="Option a-1"  onClick={()=>{console.log("group1, options-1, callback")}}/>
  <NSRadioButton name="group-1" label="Option a-2" defaultSelected={true} onClick={()=>{console.log("group1, options-2, callback")}}/>

  <NSRadioButton name="group-2" label="Option b-1" inline fancyBg={true} onClick={()=>{console.log("group1, options-1, callback")}}/>
  <NSRadioButton name="group-2" label="Option b-2" inline defaultSelected={true}  fancyBg={true} onClick={()=>{console.log("group1, options-2, callback")}}/>

</div>, document.getElementById("root"));