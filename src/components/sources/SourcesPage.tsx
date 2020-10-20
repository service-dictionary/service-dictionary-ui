import React, { useState, useEffect } from 'react';
import { ISources } from '../types/SourceTypes';
import SourcesList from './SourcesList';

const SourcesPage = () => {
  const [sources, setSources] = useState<ISources>({ sources: [] });

  const url = process.env.REACT_APP_API_URL + "/api/sources";

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
      <h2>DataSources</h2>
      <SourcesList sources={sources.sources} />
    </>
  );
};

export default SourcesPage;
