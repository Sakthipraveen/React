import React from 'react';
import ReactDOM from 'react-dom';
import HouseFull from '../HouseFull';
import {shallow} from 'enzyme';


test('check HouseFull Render', () => {
  
  	const div = document.createElement('div');
 	ReactDOM.render(<HouseFull />, div);
});

it('Check for prop = true', () => {


  const wrapper = shallow(<HouseFull hasSeat={true}/>);
  expect(wrapper.text().toLowerCase()).toEqual('vacant');  
  
});

it('Check for prop = false', () => {


  const wrapper = shallow(<HouseFull hasSeat={false}/>);
 
  expect(wrapper.text().toLowerCase()).toEqual('housefull');  
  //expect(wrapper.contains(<div>HouseFull</div>)).toEqual(true);  
  
});