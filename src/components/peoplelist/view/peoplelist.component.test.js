import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PeopleListComp as PeopleList } from './peoplelist.component';

configure({ adapter: new Adapter() });

const props = {
  data: [{
    "name": {
      "title": "Madame",
      "first": "Josefa",
      "last": "Sanchez"
    },
    "login": {
      "uuid": "7f4a567f-c26c-4be6-bb05-bc13fbfa6468",
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/94.jpg",
    },
  }],
  fetchPeopleList: () => jest.fn,
};

describe('PeopleList Component', () => {
  it('return a function', () => {
    const actual = typeof PeopleList;
    const expected = 'function';
    expect(actual).toEqual(expected);
  });

  it('rendering component', () => {
    const wrapper = mount(<PeopleList {...props} />);
    expect(wrapper.length > 0).toEqual(true);
  });

  it('checking props', () => {
    const wrapper = mount(<PeopleList {...props} />);
    const title = wrapper.find('h1');
    const name = wrapper.find('h6');
    const avatar = wrapper.find('img').prop('src');

    expect(title.text() === 'Users').toEqual(true);
    expect(name.text() === `${props.data[0].name.first} ${props.data[0].name.last}`).toEqual(true);
    expect(avatar === props.data[0].picture.large).toEqual(true);
  });
});
