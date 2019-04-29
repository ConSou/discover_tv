import React from 'react';
import { TvShow } from '../components/movieShow/TvShow';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

Enzyme.configure({ adapter: new Adapter() });


describe('<TvShow />', () => {
  let wrapper = shallow(<TvShow match={{params: {id: 1396}}}/>)

  it('renders one <TvShow /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
