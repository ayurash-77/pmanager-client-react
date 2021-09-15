import React from 'react';

export const Button = ({
  autoFocus, children, onClick, type,
}) => (
  <>
    <button type={type} onClick={onClick} autoFocus={autoFocus}>
      {children}
    </button>
  </>
);
