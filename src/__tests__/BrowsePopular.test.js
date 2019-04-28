import React from 'react';
import BrowsePopular from '../components/layout/Landing';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('<BrowsePopular />', () => {
  let wrapper = mount(<BrowsePopular />)

  it('renders one <BrowsePopular /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})

describe('<BrowsePopular /> props', () => {
  let wrapper = mount(<BrowsePopular popularData={[{original_name: "The Office", backdrop_path: "eLiqATmcigKP8K2BhjLdELmEqsy.jpg"}]}/>)

  it('it contains popularData prop', () => {
    expect(wrapper.props().popularData).toEqual([{original_name: "The Office", backdrop_path: "eLiqATmcigKP8K2BhjLdELmEqsy.jpg"}])
  })
})
