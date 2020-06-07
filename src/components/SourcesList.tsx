import React from 'react';
import { Source, Sources } from './SourcesPage';
import { Link } from 'react-router-dom';

const SourcesList = (sources: Sources) => {
  return (
    <ul>
      {sources.sources.map((s: Source) => (
        <>
          <h4>{s.name}</h4>
          <li key={s.name}>
            <Link to={'/sources/' + s.id.toString()}>{s.name}</Link>
          </li>
        </>
      ))}
    </ul>
  );
};

export default SourcesList;
