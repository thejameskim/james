import React from "react";

const Logo = (): JSX.Element => (
  <svg
    width='250'
    height='254'
    viewBox='0 0 250 254'
    fill='none'
    xmlns='https://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d)'>
      <path
        d='M117.929 7.07106C121.834 3.16582 128.166 3.16582 132.071 7.07107L242.929 117.929C246.834 121.834 246.834 128.166 242.929 132.071L132.071 242.929C128.166 246.834 121.834 246.834 117.929 242.929L7.07106 132.071C3.16582 128.166 3.16582 121.834 7.07107 117.929L117.929 7.07106Z'
        fill='#102A43'
      />
      <path
        d='M130.303 8.83883L241.161 119.697C244.09 122.626 244.09 127.374 241.161 130.303L130.303 241.161C127.374 244.09 122.626 244.09 119.697 241.161L8.83883 130.303C5.9099 127.374 5.9099 122.626 8.83883 119.697L119.697 8.83883C122.626 5.9099 127.374 5.9099 130.303 8.83883Z'
        stroke='#F0F3BD'
        stroke-width='5'
      />
    </g>
    <path
      d='M104.602 83.9062H114.025V134.248C114.025 141.051 111.975 146.374 107.873 150.215C103.804 154.056 98.3678 155.977 91.5645 155.977C84.5007 155.977 78.9993 154.17 75.0605 150.557C71.1217 146.943 69.1523 141.882 69.1523 135.371H78.5273C78.5273 139.44 79.6341 142.614 81.8477 144.893C84.0938 147.171 87.3327 148.311 91.5645 148.311C95.4382 148.311 98.5632 147.09 100.939 144.648C103.348 142.207 104.569 138.789 104.602 134.395V83.9062ZM148.059 121.943L139.367 130.977V155H129.992V83.9062H139.367V119.062L170.959 83.9062H182.287L154.309 115.303L184.484 155H173.254L148.059 121.943Z'
      fill='#F0F3BD'
    />
    <defs>
      <filter
        id='filter0_d'
        x='0.14212'
        y='4.14215'
        width='249.716'
        height='249.716'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default Logo;
