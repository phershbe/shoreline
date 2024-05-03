import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

export const IconTrendDownFill = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconTrendDownFill(props, ref) {
  return (
    <svg
      data-sl-icon-fill
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
        d="M18.75 10.625V15.625C18.75 15.7907 18.6842 15.9497 18.5669 16.0669C18.4497 16.1841 18.2908 16.25 18.125 16.25H13.125C13.0013 16.2501 12.8804 16.2135 12.7775 16.1448C12.6746 16.0761 12.5945 15.9785 12.5471 15.8642C12.4998 15.75 12.4874 15.6242 12.5115 15.5029C12.5357 15.3816 12.5953 15.2702 12.6828 15.1828L14.7414 13.125L10.625 9.00857L7.94219 11.6922C7.88414 11.7503 7.81521 11.7964 7.73934 11.8278C7.66346 11.8593 7.58213 11.8755 7.5 11.8755C7.41787 11.8755 7.33654 11.8593 7.26066 11.8278C7.18479 11.7964 7.11586 11.7503 7.05781 11.6922L1.43281 6.06717C1.31554 5.94989 1.24965 5.79083 1.24965 5.62498C1.24965 5.45913 1.31554 5.30007 1.43281 5.18279C1.55009 5.06552 1.70915 4.99963 1.875 4.99963C2.04085 4.99963 2.19991 5.06552 2.31719 5.18279L7.5 10.3664L10.1828 7.68279C10.2409 7.62468 10.3098 7.57858 10.3857 7.54713C10.4615 7.51568 10.5429 7.49949 10.625 7.49949C10.7071 7.49949 10.7885 7.51568 10.8643 7.54713C10.9402 7.57858 11.0091 7.62468 11.0672 7.68279L15.625 12.2414L17.6828 10.1828C17.7702 10.0953 17.8816 10.0357 18.0029 10.0115C18.1242 9.98737 18.25 9.99975 18.3642 10.0471C18.4785 10.0944 18.5762 10.1746 18.6448 10.2775C18.7135 10.3804 18.7501 10.5013 18.75 10.625Z"
        fill="currentColor"
      />
    </svg>
  )
})
