const RadioGroups = {
  groups: [],
  getGroup: function(groupName){
    return RadioGroups.groups.find((group)=> group.name === groupName)
  },
  add   : function(groupName, component){
    let group = RadioGroups.getGroup(groupName);
    if(!group){
      group = {name: groupName, components: []};
      RadioGroups.groups.push(group);
    }
    group.components.push(component);
  },
  selectOption: function(groupName, selectedComponent){
    RadioGroups.getGroup(groupName).components.forEach((component)=>{
      component.setSelected(component === selectedComponent);
    });
  }
};

export default RadioGroups;
