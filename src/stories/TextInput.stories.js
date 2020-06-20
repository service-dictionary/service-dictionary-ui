import React from 'react';
import TextInput from '../components/common/TextInput';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { action } from '@storybook/addon-actions';

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

export default {
  component: TextInput,
  title: 'TextInput',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Basic = () => (
  <TextInput
    id="name"
    value="Reprect monkey boy"
    label="Your name"
    onChange={action('clicked')}
  />
);
