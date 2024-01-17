import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconSignOut = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconSignOut(props, ref) {
  return (
    <svg
      data-sl-icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        d="M8.125 3.125H3.75C3.58424 3.125 3.42527 3.19085 3.30806 3.30806C3.19085 3.42527 3.125 3.58424 3.125 3.75V16.25C3.125 16.4158 3.19085 16.5747 3.30806 16.6919C3.42527 16.8092 3.58424 16.875 3.75 16.875H8.125"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.125 10H16.875"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 6.875L16.875 10L13.75 13.125"
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})
