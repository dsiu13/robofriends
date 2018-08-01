import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('render App', () => {
  const mockStore = {
    robots:[],
    searchBox:''
  };
  expect(shallow(<App store={mockStore}/>)).toMatchSnapshot();
});
