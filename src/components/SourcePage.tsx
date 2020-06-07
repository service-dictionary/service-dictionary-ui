import React from 'react';
import { Source } from './SourcesPage';

const SourcePage = (source: Source) => {
  //   const [source, setSource] = useState({ source: Source });
  return (
    <div>
      <h2>Welcome...</h2>
      <h2>{source.name}</h2>
      <p>{source.description}</p>
    </div>
  );
};

export default SourcePage;
