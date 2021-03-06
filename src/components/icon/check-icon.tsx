import * as React from 'react';

export const CheckIcon = ({
  width = 24,
  height = width,
  focusable = false,
  'aria-hidden': ariaHidden = true,
  ...props
}: JSX.IntrinsicElements['svg']) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    focusable={focusable}
    aria-hidden={ariaHidden}
    {...props}
  >
    <path d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
  </svg>
);
