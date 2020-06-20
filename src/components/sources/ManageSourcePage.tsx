import React, { useState } from 'react';
// import { sourceData } from '../../stories/SourceForm.stories';
// import { ISource } from '../types/SourceTypes';
import SourceForm from './SourceForm';

const ManageSourcePage = () => {
  //eslint-disable-next-line
  const [source, setSource] = useState({
    sourceid: 0,
    name: '',
    description: '',
    source_type_id: 1,
    endpoint: '',
  });

  function onChange() {
    debugger;
  }

  function onSubmit() {
    debugger;
  }

  var error = '';

  return (
    <>
      <h2>Manage Source</h2>
      <SourceForm
        source={source}
        onChange={onChange}
        onSubmit={onSubmit}
        onTextChange={onSubmit}
        errors={error}
      />
    </>
  );
};

export default ManageSourcePage;
