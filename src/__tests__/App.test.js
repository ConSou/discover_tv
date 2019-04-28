import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders one <App /> component', () => {
    const component = shallow(<App />)
    expect(component).toHaveLength(1)
  })
});
