/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('<Logo />', () => {
  it('Should render Logo image and the title', () => {
    const logo = shallow(<Logo />);

    const titleBold = logo.find('.titleBold');
    const title = logo.find('.titleBold');
    const logoImage = logo.find({ name: 'logoImage' });

    expect(titleBold.exists()).toBe(true);
    expect(title.exists()).toBe(true);
    expect(logoImage.exists()).toBe(true);
  });
});
