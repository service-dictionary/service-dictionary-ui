import React from 'react';
import { ISources, ISource } from '../types/SourceTypes';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const SourcesList = (sources: ISources) => (
  <>
    <Button component={Link} to="/source" variant="contained" color="primary">Add Source</Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Desc</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sources.sources.map((source: ISource) => (
          <TableRow key={source.sourceid}>
            <TableCell>
              <Link to={'/source/' + source.sourceid}>{source.sourceid}</Link>
            </TableCell>
            <TableCell>{source.name}</TableCell>
            <TableCell>{source.description}</TableCell>
            <TableCell>{source.source_type_id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
);

export default SourcesList;
