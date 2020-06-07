import React from 'react';

import Source from './Source';

export default {
  component: Source,
  title: 'Source',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const sourceData = {
  name: 'Test source',
  description: 'Some chat....',
};

export const Other = () => (
  <Source name="Some Data" description="some more text..." />
);
