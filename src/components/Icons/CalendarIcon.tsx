import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const CalendarIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect
        fill="none"
        stroke="#B7B7B7"
        strokeLinejoin="round"
        strokeWidth="32"
        x="48"
        y="80"
        width="416"
        height="384"
        rx="48"
      />
      <path
        fill="none"
        stroke="#B7B7B7"
        strokeLinejoin="round"
        strokeWidth="32"
        strokeLinecap="round"
        d="M128 48v32M384 48v32M464 160H48"
      />
    </SVGIconBase>
  );
};

export default CalendarIcon;
