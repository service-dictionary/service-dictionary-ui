import React from 'react';
import { ISources, ISource } from '../types/SourceTypes';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SourcesList = (sources: ISources) => {
  return (
    <>
      <Link className="btn btn-primary" to="/source">
        Add Source
      </Link>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {sources.sources.map((source: ISource) => (
            <tr>
              <td>
                <Link to={'/source/' + source.sourceid}>{source.sourceid}</Link>
              </td>
              <td>{source.name}</td>
              <td>{source.description}</td>
              <td>{source.source_type_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SourcesList;
