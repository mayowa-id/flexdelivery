import React from 'react';

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  name,
  id,
  ...props
}) => {
  const selectId = id || `select-${name || Math.random().toString(36).substr(2, 9)}`;

  const containerClasses = [
    'select-container',
    fullWidth ? 'select-container--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={selectId} className="select-label">
          {label}
          {required && <span className="input-label__required">*</span>}
        </label>
      )}

      <div className="select-wrapper">
        <select
          id={selectId}
          name={name}
          className="select-field"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Dropdown arrow icon */}
        <span className="select-icon">▼</span>
      </div>
    </div>
  );
};

export { Select};