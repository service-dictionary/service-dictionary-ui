import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props: {
  onChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
  id: string;
  name: string;
  label: string;
  // value: string;
  error: string;
  //   error: string | null | undefined;
  //   id: string | undefined;
  //   label: React.ReactNode;
  //   name: string | undefined;
  value: string | number | readonly string[] | undefined;
  //   onChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
  defaultOption: React.ReactNode | null | undefined;
  options: any[];
}) => {
  let wrapperClass = 'form-group';
  if (props.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        >
          <option value="">{props.defaultOption}</option>
          {props.options.map(
            (option: { value: string; text: React.ReactNode }) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              );
            }
          )}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.array.isRequired,
};

SelectInput.defaultProps = {
  error: '',
};

export default SelectInput;
