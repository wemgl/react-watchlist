import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter });

const queryOMDB = (query = 'Captain America') => {
};
const query = 'Kill Bill: Vol. 2';

describe('SearchBar test', () => {
  test('receives values from props', () => {
    const component = renderer.create(
      <SearchBar
        queryOMDB={queryOMDB}
        query={query}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('input field has correct query from props', () => {
    const wrapper = mount(
      <SearchBar
        queryOMDB={queryOMDB}
        query={query}
      />
    );

    expect(wrapper.ref('query').value).toEqual('Kill Bill: Vol. 2');
  });
});