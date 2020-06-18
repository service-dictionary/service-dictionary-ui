import React from 'react';
import SourceForm from '../components/sources/SourceForm';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

export default {
  component: SourceForm,
  title: 'SourceForm',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const sourceData = {
  sourceid: 1,
  name: 'Test',
  description: 'Test description',
  endpoint: 'service-endpoint',
};

export const Basic = () => <SourceForm source={sourceData} />;
