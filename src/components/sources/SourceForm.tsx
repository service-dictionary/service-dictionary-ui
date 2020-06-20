import React from 'react';
import { ISource } from '../types/SourceTypes';
import '../sources/SourceForm.css';

const SourceForm = (props: {
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  onChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
  onTextChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
  source: ISource;
  errors: string;
}) => {
  return (
    <div className="sourceForm">
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Source name:</label>
          <div className="field field-text">
            <input
              id="name"
              type="text"
              name="name"
              onChange={props.onTextChange}
              value={props.source.name || ''}
              className="form-control"
            ></input>
          </div>
          <label htmlFor="source">Select type:</label>
          <div className="field field-select">
            <select
              id="source_type"
              name="source_type_id"
              onChange={props.onChange}
              value={props.source.source_type_id || ''}
              className="form-control"
            >
              <option value="" />
              <option value="1">JSON</option>
              <option value="2">CSV</option>
              <option value="3">SQL</option>
            </select>
          </div>
          <div id="wrap">
            <label className="textarea-label">Description:</label>
            <div className="field-desc">
              <textarea
                name="description"
                rows={5}
                value={props.source.description}
              ></textarea>
            </div>
          </div>
          {props.errors && (
            <div className="alert alert-danger">{props.errors}</div>
          )}
        </div>
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
};

// SourceForm.propTypes = {
//   course: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
// };

export default SourceForm;
