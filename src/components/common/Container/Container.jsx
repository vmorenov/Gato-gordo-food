function Container({ children, wide = false }) {
  return <div className={wide ? 'container container--wide' : 'container'}>{children}</div>;
}

export default Container;
