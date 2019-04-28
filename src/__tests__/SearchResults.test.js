import React from 'react';
import SearchResults from '../components/movieShow/SearchResults';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

Enzyme.configure({ adapter: new Adapter() });


describe('<SearchResults />', () => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = mount(<SearchResults searchData={[{original_name: "The Office", backdrop_path: "eLiqATmcigKP8K2BhjLdELmEqsy.jpg"}]}/>,
    options.get())

  it('renders one <SearchResults /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('includes a h6 with class center-align', () => {
    expect(wrapper.find('h6.center-align')).toHaveLength(1)
  })

  it('includes a h6 with title of show', () => {
    expect(wrapper.find('h6.center-align').text()).toEqual("The Office")
  })

  it('has an image with correct src', () => {
    expect(wrapper.find('img').prop("src")).toEqual("https://image.tmdb.org/t/p/w400/eLiqATmcigKP8K2BhjLdELmEqsy.jpg")
  })
})

describe('<SearchResults /> props', () => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = mount(<SearchResults searchData={[{original_name: "The Office", backdrop_path: "eLiqATmcigKP8K2BhjLdELmEqsy.jpg"}]}/>,
    options.get())

  it('it contains searchData prop', () => {
    expect(wrapper.props().searchData).toEqual([{original_name: "The Office", backdrop_path: "eLiqATmcigKP8K2BhjLdELmEqsy.jpg"}])
  })
})
