import React, { useState, useEffect } from 'react';
import SourcesList from './SourcesList';
import { ISources } from '../types/SourceTypes';

const SourcesPage = () => {
  const [sources, setSources] = useState<ISources>({ sources: [] });

  const url = 'http://localhost:5000/api/sources';

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setSources({ sources: response }))
        .catch((error) => console.error(error));
    }
  }, [url]);

  return (
    <>
      <h2>Sources</h2>
      <SourcesList sources={sources.sources} />
    </>
  );
};

export default SourcesPage;
