import React from 'react';
import { ISource } from '../types/SourceTypes';
import '../sources/SourceForm.css';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import TextAreaInput from '../common/TextAreaInput';

const SourceForm = (props: {
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  onSelectChange:
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    | undefined;
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
          <TextInput
            id="name"
            name="name"
            onChange={props.onTextInputChange}
            value={props.source.name || ''}
            label="Name:"
          />
          <SelectInput
            id="source_type"
            name="source_type_id"
            label="Select type:"
            onChange={props.onSelectChange}
            defaultOption="Select type"
            value={props.source.source_type_id || ''}
            options={[
              { value: 1, text: 'JSON' },
              { value: 2, text: 'SQL' },
              { value: 3, text: 'CSV' },
            ]}
            // options={products.map(product => ({
            //   value: product.ticker,
            //   text: product.name
            // }))}
          />
          <TextInput
            id="endpoint"
            name="endpoint"
            onChange={props.onTextInputChange}
            value={props.source.endpoint}
            label="Endpoint"
          />
          <TextAreaInput
            name="description"
            rows={5}
            label="Description:"
            value={props.source.description}
            onChange={props.onDescChange}
          />
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
