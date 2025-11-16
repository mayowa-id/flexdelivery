const Badge = ({
  children,
  variant = 'primary', // primary | success | warning | danger | orange
  showDot = false,
  notification = false, // For circular notification badges
  className = '',
  ...props
}) => {
  const badgeClasses = [
    notification ? 'badge--notification' : 'badge',
    notification ? '' : `badge--${variant}`,
    className
  ].filter(Boolean).join(' ');

  if (notification) {
    return (
      <span className={badgeClasses} {...props}>
        {children}
      </span>
    );
  }

  return (
    <span className={badgeClasses} {...props}>
      {showDot && <span className="badge__dot"></span>}
      {children}
    </span>
  );
};

export { Badge };