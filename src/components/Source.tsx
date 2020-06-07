import React from 'react';

type SourceProps = {
  name: string;
  description: string;
};

const Source = ({ name, description }: SourceProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Source;
