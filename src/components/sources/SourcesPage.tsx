import React, { useState, useEffect } from 'react';
import { ISources } from '../types/SourceTypes';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SourcesPage = () => {
  const [sources, setSources] = useState<ISources>({ sources: [] });

  const url = 'http://localhost:5000/api/sources';

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
      <h2>Sources</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {sources.sources.map((source) => (
            <tr>
              <td>
                <Link to={'/source/' + source.sourceid}>
                  #{source.sourceid}
                </Link>
              </td>
              <td>{source.name}</td>
              <td>{source.description}</td>
              <td>TBD</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SourcesPage;
