import React from 'react';
import PreviewThemeChat from '../../../components/Settings/PreviewThemeChat.js';
import { shallow } from 'enzyme';

describe('<PreviewThemeChat />', () => {
  it('render PreviewThemeChat without crashing', () => {
    shallow(<PreviewThemeChat />);
  });
});
