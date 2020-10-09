/** @jsx jsx */
import { jsx } from '@vtex/admin-ui'

export type LogoProps = React.SVGAttributes<SVGElement> & {
  colored?: boolean
}

export default function Logo({ colored, ...props }: LogoProps) {
  return (
    <svg height={64} viewBox="0 0 400 205" {...props}>
      <title>VTEX logo</title>
      <g fillRule="nonzero" sx={{ fill: 'primary.text' }}>
        <g id="vtex-logo" transform="translate(48.000000, 47.000000)">
          <path
            d="M220.35,41.34 L209.43,41.34 L209.43,78.72 C209.424558,79.4246582 208.854658,79.9945584 208.15,80 L199.74,80 C199.035342,79.9945584 198.465442,79.4246582 198.46,78.72 L198.46,41.34 L187.46,41.34 C187.126939,41.3535592 186.802636,41.2313586 186.561344,41.0013768 C186.320052,40.771395 186.182434,40.4533282 186.18,40.12 L186.18,33.5 C186.182434,33.1666718 186.320052,32.848605 186.561344,32.6186232 C186.802636,32.3886414 187.126939,32.2664408 187.46,32.28 L220.33,32.28 C221.039015,32.2459827 221.642298,32.7911719 221.68,33.5 L221.68,40.12 C221.642291,40.8207243 221.051369,41.3627732 220.35,41.34 Z"
            id="Shape"
          />
          <path
            d="M255.37,79.75 C251.064912,80.3657808 246.718536,80.6466236 242.37,80.59 C234.08,80.59 226.76,78.47 226.76,66.78 L226.76,45.45 C226.76,33.76 234.15,31.71 242.43,31.71 C246.745039,31.6508892 251.058116,31.9283973 255.33,32.54 C256.23,32.67 256.61,32.99 256.61,33.82 L256.61,39.82 C256.604558,40.5246582 256.034658,41.0945584 255.33,41.1 L241.83,41.1 C238.83,41.1 237.72,42.1 237.72,45.47 L237.72,51.31 L254.86,51.31 C255.564658,51.3154416 256.134558,51.8853418 256.14,52.59 L256.14,58.69 C256.134558,59.3946582 255.564658,59.9645584 254.86,59.97 L237.72,59.97 L237.72,66.78 C237.72,70.12 238.81,71.15 241.83,71.15 L255.37,71.15 C256.074658,71.1554416 256.644558,71.7253418 256.65,72.43 L256.65,78.43 C256.66,79.23 256.27,79.62 255.37,79.75 Z"
            id="Shape"
          />
          <path
            d="M303.83,80 L293.62,80 C292.907985,80.0528961 292.239543,79.6526319 291.95,79 L283.09,65 L275.09,78.74 C274.64,79.51 274.19,80.02 273.48,80.02 L264,80.02 C263.751694,80.0645194 263.496441,79.9964455 263.30328,79.8341903 C263.110119,79.671935 262.999008,79.4322637 263,79.18 C263.013093,79.0228688 263.057282,78.8699061 263.13,78.73 L277.06,55.54 L263,33.5 C262.927486,33.381618 262.883018,33.2482143 262.87,33.11 C262.917599,32.6036815 263.363065,32.2294895 263.87,32.27 L274.21,32.27 C274.92,32.27 275.43,32.91 275.82,33.49 L284.04,46.49 L292.04,33.49 C292.329916,32.8325425 292.938632,32.371279 293.65,32.27 L303.16,32.27 C303.666935,32.2294895 304.112401,32.6036815 304.16,33.11 C304.146982,33.2482143 304.102514,33.381618 304.03,33.5 L290.03,55.67 L304.6,78.67 C304.712594,78.8655039 304.777676,79.0847283 304.79,79.31 C304.67,79.75 304.34,80 303.83,80 Z"
            id="Shape"
          />
          <path
            d="M170.8,32.41 C170.320307,32.3993264 169.900642,32.7308621 169.8,33.2 L160.47,67.72 C160.34,68.43 160.15,68.72 159.57,68.72 C158.99,68.72 158.8,68.46 158.67,67.72 L149.37,33.2 C149.269358,32.7308621 148.849693,32.3993264 148.37,32.41 L139.19,32.41 C138.881856,32.4024272 138.587439,32.5373825 138.39204,32.7757702 C138.19664,33.0141579 138.122095,33.3293363 138.19,33.63 C138.19,33.63 149.58,73.2 149.7,73.63 C151.22,78.35 154.91,80.63 159.6,80.63 C164.099558,80.7914525 168.15216,77.9259768 169.5,73.63 C169.68,73.09 180.82,33.63 180.82,33.63 C180.884345,33.3307998 180.80814,33.0186083 180.613178,32.7827041 C180.418216,32.5467999 180.125964,32.4131593 179.82,32.42 L170.8,32.41 Z"
            id="Shape"
          />
          <path
            d="M118.77,0.32 L23.05,0.32 C19.5863153,0.351666779 16.3889012,2.1841531 14.6106802,5.15670157 C12.8324593,8.12925004 12.7299064,11.8131266 14.34,14.88 L23.92,33.12 L6.56,33.12 C4.34212938,33.0796434 2.26852073,34.2160272 1.10916104,36.1071813 C-0.050198645,37.9983354 -0.122159306,40.3618165 0.92,42.32 L31.72,100.52 C32.82523,102.610084 34.9956855,103.917585 37.36,103.917585 C39.7243145,103.917585 41.89477,102.610084 43,100.52 L51.36,84.75 L61.86,104.61 C63.5672111,107.834206 66.9167025,109.850719 70.565,109.850719 C74.2132975,109.850719 77.5627889,107.834206 79.27,104.61 L127.27,14.36 C128.859296,11.3894263 128.76395,7.80084814 127.019155,4.91885888 C125.274361,2.03686962 122.138857,0.288843161 118.77,0.32 L118.77,0.32 Z M76,38.45 L55,77.83 C54.2785005,79.1902007 52.8647101,80.0406475 51.325,80.0406475 C49.7852899,80.0406475 48.3714995,79.1902007 47.65,77.83 L26.92,38.83 C26.2804208,37.6297958 26.3177694,36.18196 27.018378,35.0163274 C27.7189867,33.8506948 28.9800187,33.1383594 30.34,33.14 L72.76,33.14 C74.0381403,33.1203257 75.2313827,33.778051 75.8971997,34.869251 C76.5630167,35.9604511 76.6021171,37.3223986 76,38.45 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  )
}
