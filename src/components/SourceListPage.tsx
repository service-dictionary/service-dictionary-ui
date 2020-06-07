import React, { useState, useEffect } from 'react';

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
  results: Source[];
}

const SourceListPage = () => {
  const [data, setData] = useState<Sources>({
    results: [],
  });

  const url = 'http://localhost:5000/api/sources';

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData({ results: response }))
        .catch((error) => console.log(error));
    }
  }, [url]);

  return (
    <ul>
      {data.results.map((item) => (
        <li key={item.name}>
          <a href={item.name}>{item.description}</a>
        </li>
      ))}
    </ul>
  );
};

export default SourceListPage;
