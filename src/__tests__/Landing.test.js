import React from 'react';
import Landing from '../components/layout/Landing';
import Search from '../components/movieShow/Search'
import SearchResults from '../components/movieShow/SearchResults'
import BrowsePopular from '../components/movieShow/BrowsePopular'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

Enzyme.configure({ adapter: new Adapter() });


describe('<Landing />', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<Landing />) })

  it('renders one <Landing /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('includes 1 div with class dashboard container', () => {
    expect(wrapper.find('div.dashboard.container')).toHaveLength(1)
  })

  it('includes 1 div with class row', () => {
    expect(wrapper.find('div.row')).toHaveLength(1)
  })
})

describe('<Landing /> children components', () => {
  let wrapper = mount(<Landing />)

  it('includes 1 <Search /> component', () => {
    expect(wrapper.find(Search)).toHaveLength(1)
  })

  it('includes 1 <BrowsePopular /> component', () => {
    expect(wrapper.find(BrowsePopular)).toHaveLength(1)
  })
})

describe('<Landing /> children state change', () => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = mount(<Landing destination="/" />,
    options.get())

  wrapper.setState({searchData: [{}, {}, {}]})

  it('includes 0 <BrowsePopular /> component', () => {
    expect(wrapper.find(BrowsePopular)).toHaveLength(0)
  })

  it('includes 1 <SearchResults /> component', () => {
    expect(wrapper.find(SearchResults)).toHaveLength(1)
  })
})

describe('<Landing /> default state', () => {
  let wrapper = mount(<Landing />)

  it('popularData starts null', () => {
    expect(wrapper.state('popularData')).toEqual(null)
  })

  it('Search starts empty', () => {
    expect(wrapper.state('search')).toEqual('')
  })

  it('searchData starts null', () => {
    expect(wrapper.state('searchData')).toEqual(null)
  })
})
