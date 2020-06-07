import React, { useState, useEffect } from 'react';
import SourcesList from './SourcesList';

export interface Source {
  id: number;
  name: string;
  source_uuid: string;
  description: string;
  is_deleted: boolean;
  created: string;
  endpoint: string;
}

export interface Sources {
  sources: Source[];
}

const SourcesPage = () => {
  const [sources, setSources] = useState<Sources>({ sources: [] });

  const url = 'http://localhost:5000/api/sources';

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setSources({ sources: response }))
        .catch((error) => console.log(error));
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
