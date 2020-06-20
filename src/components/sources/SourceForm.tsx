import React from 'react';
import { ISource } from '../types/SourceTypes';
import '../sources/SourceForm.css';
import TextInput from '../common/TextInput';

const SourceForm = (props: {
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  onChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
  onTextInputChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
  onDescChange:
    | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
  source: ISource;
  errors: string;
}) => {
  return (
    <div className="sourceForm">
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          {/* <label htmlFor="name">Source name:</label> */}
          {/* <div className="field field-text"> */}
          {/* <input
              id="name"
              type="text"
              name="name"
              onChange={props.onTextInputChange}
              value={props.source.name || ''}
              className="form-control"
            ></input> */}
          <TextInput
            id="name"
            name="name"
            onChange={props.onTextInputChange}
            value={props.source.name || ''}
            label="Name:"
          />
          {/* </div> */}

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
          <TextInput
            id="endpoint"
            name="endpoint"
            onChange={props.onTextInputChange}
            value={props.source.endpoint}
            label="Endpoint"
          />
          <div id="wrap">
            <label className="textarea-label">Description:</label>
            <div className="field-desc">
              <textarea
                name="description"
                rows={5}
                value={props.source.description}
                onChange={props.onDescChange}
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
