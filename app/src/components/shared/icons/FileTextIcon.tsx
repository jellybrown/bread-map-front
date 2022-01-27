import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const FileTextIcon: React.FC<SvgProps> = props => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33301 11.3337C5.33301 10.9655 5.63148 10.667 5.99967 10.667H9.99967C10.3679 10.667 10.6663 10.9655 10.6663 11.3337C10.6663 11.7018 10.3679 12.0003 9.99967 12.0003H5.99967C5.63148 12.0003 5.33301 11.7018 5.33301 11.3337Z"
      fill="#424242"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33301 8.66667C5.33301 8.29848 5.63148 8 5.99967 8H9.99967C10.3679 8 10.6663 8.29848 10.6663 8.66667C10.6663 9.03486 10.3679 9.33333 9.99967 9.33333H5.99967C5.63148 9.33333 5.33301 9.03486 5.33301 8.66667Z"
      fill="#424242"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33301 5.99967C5.33301 5.63148 5.63148 5.33301 5.99967 5.33301H6.66634C7.03453 5.33301 7.33301 5.63148 7.33301 5.99967C7.33301 6.36786 7.03453 6.66634 6.66634 6.66634H5.99967C5.63148 6.66634 5.33301 6.36786 5.33301 5.99967Z"
      fill="#424242"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33366 2.66634C4.59728 2.66634 4.00033 3.26329 4.00033 3.99967V11.9997C4.00033 12.7361 4.59728 13.333 5.33366 13.333H10.667C11.4034 13.333 12.0003 12.7361 12.0003 11.9997V5.88529C12.0003 5.70848 11.9301 5.53891 11.8051 5.41389L9.25278 2.8616C9.12776 2.73658 8.95819 2.66634 8.78137 2.66634H5.33366ZM2.66699 3.99967C2.66699 2.52692 3.8609 1.33301 5.33366 1.33301H8.78137C9.31181 1.33301 9.82052 1.54372 10.1956 1.91879L12.7479 4.47108C13.1229 4.84615 13.3337 5.35486 13.3337 5.88529V11.9997C13.3337 13.4724 12.1398 14.6663 10.667 14.6663H5.33366C3.8609 14.6663 2.66699 13.4724 2.66699 11.9997V3.99967Z"
      fill="#424242"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.33333 2V3.33333C9.33333 4.4379 10.2288 5.33333 11.3333 5.33333H12.6667V6.66667H11.3333C9.49238 6.66667 8 5.17428 8 3.33333V2H9.33333Z"
      fill="#424242"
    />
  </Svg>
);

export default FileTextIcon;
