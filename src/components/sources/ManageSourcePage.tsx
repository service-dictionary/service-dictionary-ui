import React, { useState } from 'react';
import SourceForm from './SourceForm';

const ManageSourcePage = () => {
  const [source, setSource] = useState({
    sourceid: 0,
    name: '',
    description: '',
    source_type_id: 0,
    endpoint: 'tbd',
  });

  function onChange(event: { target: { name: any; value: any } }) {
    const { target } = event;
    setSource({
      ...source,
      [target.name]: target.value,
    });
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
        onSelectChange={onChange}
        onSubmit={onSubmit}
        onTextInputChange={onChange}
        onDescChange={onChange}
        errors={error}
      />
    </>
  );
};

export default ManageSourcePage;
