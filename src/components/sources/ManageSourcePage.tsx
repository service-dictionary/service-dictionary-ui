import React from 'react';

const ManageSourcePage = (props: { match: { params: { id: any } } }) => {
  return (
    <>
      <h2>Manage Source Page:</h2>
      {props.match.params.id}
    </>
  );
};

export default ManageSourcePage;
