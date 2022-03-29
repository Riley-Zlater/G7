import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';
import { Page } from '@shopify/polaris';

import Index from '../index';
import test from "jest";
import { mount } from 'enzyme';

configure({adapter: new Adapter()});
test('renders page', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find(Page).exists()).toBe(true);
});