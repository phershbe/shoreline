import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconHouse = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconHouse(props, ref) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.07484 2.1079C9.32802 1.87746 9.65805 1.74976 10.0004 1.74976C10.3427 1.74976 10.6728 1.87747 10.9259 2.1079L10.9361 2.11715L17.1818 8.01485C17.3207 8.14262 17.4318 8.29761 17.5081 8.4702C17.5857 8.64543 17.6258 8.83493 17.6258 9.02654V16.2501C17.6258 16.6147 17.4809 16.9645 17.2231 17.2223C16.9652 17.4802 16.6155 17.6251 16.2508 17.6251H12.5C12.1353 17.6251 11.7856 17.4802 11.5277 17.2223C11.2699 16.9645 11.125 16.6147 11.125 16.2501V12.6251H8.875V16.2501C8.875 16.6147 8.73013 16.9645 8.47227 17.2223C8.21441 17.4802 7.86467 17.6251 7.5 17.6251H3.75C3.38533 17.6251 3.03559 17.4802 2.77773 17.2223C2.51987 16.9645 2.375 16.6147 2.375 16.2501V9.02661C2.37502 8.835 2.41509 8.64543 2.49263 8.4702C2.56902 8.2976 2.68012 8.1426 2.81898 8.01483L9.07484 2.1079ZM10.0004 3.29682L3.875 9.08072V16.1251H7.375V12.5001C7.375 12.1354 7.51987 11.7856 7.77773 11.5278C8.03559 11.2699 8.38533 11.1251 8.75 11.1251H11.25C11.6147 11.1251 11.9644 11.2699 12.2223 11.5278C12.4801 11.7856 12.625 12.1354 12.625 12.5001V16.1251H16.1258V9.08072L10.0004 3.29682Z"
        fill="currentColor"
      />
    </svg>
  )
})
