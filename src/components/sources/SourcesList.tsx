import React from 'react';
import { ISource, ISources } from '../types/SourceTypes';
import SourceForm from './SourceForm';

const SourcesList = (sources: ISources) => {
  return (
    <ul>
      {sources.sources.map((source: ISource) => (
        <div>
          <SourceForm source={source} />
        </div>
      ))}
    </ul>
  );
};

export default SourcesList;
