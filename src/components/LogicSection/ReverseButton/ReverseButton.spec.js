/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import ReverseButton from './ReverseButton';

describe('<ReverseButton />', () => {
  let onClickProp;
  let reverseButton;

  beforeEach(() => {
    onClickProp = spy();

    reverseButton = shallow(<ReverseButton onClick={onClickProp} />);
  });

  it('Should render ReverseButton with onChange prop', () => {
    const container = reverseButton.find('.arrowsContainer');
    const { onClick } = container.props();
    expect(onClick).toBe(onClickProp);
  });

  it('Should render the two arrows', () => {
    const arrowDown = reverseButton.find({ name: 'long-arrow-down' });
    const arrowUp = reverseButton.find({ name: 'long-arrow-down' });
    expect(arrowDown.exists()).toBe(true);
    expect(arrowUp.exists()).toBe(true);
  });
});
