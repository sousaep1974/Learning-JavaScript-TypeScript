import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

function Form({ handleSubmit, handleChange, taskNew }) {
  return (
    <>
      <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={handleChange} type="text" value={taskNew} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </>
  );
}
export default Form;

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  taskNew: PropTypes.string.isRequired,
};
