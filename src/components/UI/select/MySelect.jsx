import React from "react";
import classes from './Myselect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
      <select
      value={value} 
      onChange={e => onChange(e.target.value)}
      className={classes.myselect}>
        <option disabled value="">{defaultValue}</option>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )}
      </select>
    );
};

export default MySelect