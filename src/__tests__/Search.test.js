import React from 'react';
import Search from '../components/layout/Landing';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('<Search />', () => {
  let wrapper = mount(<Search />)

  it('renders one <search /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('includes 1 form with class col m12', () => {
    expect(wrapper.find('form.col.m12')).toHaveLength(1)
  })

  it('includes 1 input with class validate', () => {
    expect(wrapper.find('input.validate')).toHaveLength(1)
  })
})

describe('<Search /> props', () => {
  let wrapper = mount(<Search searchMovies="test_search" handleSubmit="test_submit" />)

  it('it contains searchMovies prop', () => {
    expect(wrapper.props().searchMovies).toEqual("test_search")
  })

  it('includes handleSubmit prop', () => {
    expect(wrapper.props().handleSubmit).toEqual("test_submit")
  })
})
