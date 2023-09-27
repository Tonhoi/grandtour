import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const MenuIcon = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      xmlns="http://www.w3.org/2000/svg"
      width={"16"}
      height={"16"}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="24"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </SVGIconBase>
  );
};

export default MenuIcon;
