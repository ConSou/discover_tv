import React from 'react';
import { MovieShow } from '../components/movieShow/MovieShow';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

Enzyme.configure({ adapter: new Adapter() });


describe('<MovieShow />', () => {
  let wrapper = shallow(<MovieShow match={{params: {id: 1396}}}/>)

  it('renders one <MovieShow /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
