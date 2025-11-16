
import React from 'react';
import './Input.css';

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onFocus,
  onBlur,
  icon = null,          // Optional icon on the left
  iconPosition = 'left', // left | right
  error = '',           // Error message to display
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  name,
  id,
  ...props
}) => {
  // Generate unique ID if not provided
  const inputId = id || `input-${name || Math.random().toString(36).substr(2, 9)}`;

  // Build container class names
  const containerClasses = [
    'input-container',
    fullWidth ? 'input-container--full-width' : '',
    error ? 'input-container--error' : '',
    disabled ? 'input-container--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Build input wrapper class names
  const wrapperClasses = [
    'input-wrapper',
    icon ? `input-wrapper--with-icon-${iconPosition}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-label__required">*</span>}
        </label>
      )}

      {/* Input wrapper (for icon positioning) */}
      <div className={wrapperClasses}>
        {/* Icon on the left */}
        {icon && iconPosition === 'left' && (
          <span className="input-icon input-icon--left">{icon}</span>
        )}

        {/* The actual input field */}
        <input
          id={inputId}
          name={name}
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          {...props}
        />

        {/* Icon on the right */}
        {icon && iconPosition === 'right' && (
          <span className="input-icon input-icon--right">{icon}</span>
        )}
      </div>

      {/* Error message */}
      {error && (
        <span className="input-error">{error}</span>
      )}
    </div>
  );
};

export default Input;

