import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const PhoneIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect
        x="128"
        y="16"
        width="256"
        height="480"
        rx="48"
        ry="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </SVGIconBase>
  );
};

export default PhoneIcon;
