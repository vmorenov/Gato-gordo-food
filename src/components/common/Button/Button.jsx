function Button({ children, href, onClick, size = 'medium', variant = 'primary' }) {
  const className = `button button--${variant} button--${size}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
