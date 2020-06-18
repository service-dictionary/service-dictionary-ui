import React from 'react';
import { Link } from 'react-router-dom';

const SourceForm = (props: {
  source: {
    sourceid: React.ReactNode;
    name: React.ReactNode;
    description: React.ReactNode;
    endpoint: React.ReactNode;
    created: React.ReactNode;
  };
}) => {
  return (
    <div>
      <h2>
        {props.source.sourceid}-{props.source.name}
      </h2>
      <p>Description: {props.source.description}</p>
      <p>Endpoint: {props.source.endpoint}</p>
      <p>Created: {props.source.created}</p>
      <Link to={'/source/' + props.source.sourceid}>{props.source.name}</Link>
    </div>
  );
};

export default SourceForm;
