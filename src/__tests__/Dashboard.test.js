import React from 'react';
import {Dashboard} from '../components/dashboard/Dashboard';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('<Dashboard /> first log in', () => {

  let test_profile = {firstName: "Conor", lastName: "Souhrada", watchList: []}
  let wrapper = shallow(<Dashboard auth={{uid: true}} profile={test_profile}/>)

  it('renders 1 <Dashboard /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('includes 1 div with class dashboard container', () => {
    expect(wrapper.find('div.dashboard.container')).toHaveLength(1)
  })

  it('includes 1 div with class row', () => {
    expect(wrapper.find('div.row')).toHaveLength(2)
  })

  it('includes a h4 with message to add to watchlist', () => {
    expect(wrapper.find('h4').text()).toEqual(" Add to your watch list by browsing for tv shows or movies ")
  })
})

describe('<Dashboard /> with watchlist', () => {

  let test_profile = {firstName: "Conor", lastName: "Souhrada", watchList: [{name: "The Office", backdrop_path: "eLiqATmcigKP8K2BhjLdELmEqsy.jpg"}]}
  let wrapper = shallow(<Dashboard auth={{uid: true}} profile={test_profile}/>)


  it('includes a h4 with users name and watchlist', () => {
    expect(wrapper.find('h4').text()).toEqual(" Conor's WatchList: ")
  })

  it('includes a h6 with first item', () => {
    expect(wrapper.find('h6.left-align')).toHaveLength(1)
  })

  it('includes a h6 with name and remove', () => {
    expect(wrapper.find('h6.left-align').text()).toEqual("The Office Remove ")
  })

  it('has an image with correct src', () => {
    expect(wrapper.find('img').prop("src")).toEqual("https://image.tmdb.org/t/p/w400/eLiqATmcigKP8K2BhjLdELmEqsy.jpg")
  })
})
