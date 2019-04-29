import React from 'react';
import MovieSearchResults from '../components/movieShow/MovieSearchResults';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

Enzyme.configure({ adapter: new Adapter() });


describe('<MovieSearchResults />', () => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = mount(<MovieSearchResults searchData={[{title: "Eating Animals", backdrop_path: "tppzVmguu02QAjXM957XVqKrvgl.jpg"}]}/>,
    options.get())

  it('renders one <MovieSearchResults /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('includes a h6 with class center-align', () => {
    expect(wrapper.find('h6.center-align')).toHaveLength(1)
  })

  it('includes a h6 with title of show', () => {
    expect(wrapper.find('h6.center-align').text()).toEqual("Eating Animals")
  })

  it('has an image with correct src', () => {
    expect(wrapper.find('img').prop("src")).toEqual("https://image.tmdb.org/t/p/w400/tppzVmguu02QAjXM957XVqKrvgl.jpg")
  })
})

describe('<MovieSearchResults /> props', () => {
  const options = new ReactRouterEnzymeContext();
  let wrapper = mount(<MovieSearchResults searchData={[{title: "Eating Animals", backdrop_path: "tppzVmguu02QAjXM957XVqKrvgl.jpg"}]}/>,
    options.get())

  it('it contains searchData prop', () => {
    expect(wrapper.props().searchData).toEqual([{title: "Eating Animals", backdrop_path: "tppzVmguu02QAjXM957XVqKrvgl.jpg"}])
  })
})
