const Card = ({
  title,
  value,
  children,
  footer,
  clickable = false,
  onClick,
  className = '',
  ...props
}) => {
  const cardClasses = [
    'card',
    clickable ? 'card--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={clickable ? onClick : undefined} {...props}>
      {/* If title and value are provided, use default header structure */}
      {(title || value) && (
        <div className="card__header">
          {title && <p className="card__title">{title}</p>}
          {value && <p className="card__value">{value}</p>}
        </div>
      )}

      {/* Card body - custom content */}
      {children && <div className="card__body">{children}</div>}

      {/* Card footer - optional */}
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export { Card };