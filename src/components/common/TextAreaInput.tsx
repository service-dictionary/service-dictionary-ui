import React from 'react';
import PropTypes from 'prop-types';

const TextAreaInput = (props: {
  onChange:
    | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
  name: string;
  label: string;
  value: string;
  error: string;
  rows: number | 5;
}) => {
  let wrapperClass = 'form-group';
  if (props.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field-desc">
        <textarea
          name="description"
          rows={props.rows}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextAreaInput.defaultProps = {
  error: '',
};

export default TextAreaInput;
