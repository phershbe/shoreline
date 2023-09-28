import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconLockKeyOpen = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconLockKeyOpen(props, ref) {
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
        d="M10.75 13.1257C11.659 12.8142 12.3125 11.9521 12.3125 10.9375C12.3125 9.66034 11.2772 8.625 10 8.625C8.72284 8.625 7.6875 9.66034 7.6875 10.9375C7.6875 11.9521 8.34096 12.8142 9.25 13.1257V14.375C9.25 14.7892 9.58579 15.125 10 15.125C10.4142 15.125 10.75 14.7892 10.75 14.375V13.1257ZM10 10.125C9.55127 10.125 9.1875 10.4888 9.1875 10.9375C9.1875 11.3862 9.55127 11.75 10 11.75C10.4487 11.75 10.8125 11.3862 10.8125 10.9375C10.8125 10.4888 10.4487 10.125 10 10.125Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.32062 2.69562C8.76602 2.25022 9.37011 2 10 2C11.166 2 12.1733 2.83288 12.39 3.89933C12.4725 4.30525 12.8684 4.56746 13.2743 4.48498C13.6803 4.40251 13.9425 4.00659 13.86 3.60067C13.497 1.81399 11.8574 0.5 10 0.5C8.97229 0.5 7.98666 0.908258 7.25996 1.63496C6.53326 2.36166 6.125 3.34729 6.125 4.375V6.125H3.75C2.99061 6.125 2.375 6.74061 2.375 7.5V16.25C2.375 17.0094 2.99061 17.625 3.75 17.625H16.25C17.0094 17.625 17.625 17.0094 17.625 16.25V7.5C17.625 6.74061 17.0094 6.125 16.25 6.125H7.625V4.375C7.625 3.74511 7.87522 3.14102 8.32062 2.69562ZM3.875 7.625V16.125H16.125V7.625H3.875Z"
        fill="currentColor"
      />
    </svg>
  )
})
