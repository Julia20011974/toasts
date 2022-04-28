/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { CloseButton } from '../components/CloseButton';

export default {
  title: 'Button',
  component: CloseButton
};
function Template(args) {
  return <CloseButton {...args} />;
}
export const Primary = Template.bind({});
Primary.args = { bg: ['#FFF', '#000'], label: 'Button' };
