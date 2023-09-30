import { ReactNode } from "react";
import { styled, Box, BoxProps } from "@mui/material";

interface CardItemBaseProps extends BoxProps {
  children: ReactNode;
  disableAnimation?: boolean;
  disableBorder?: boolean;
  disableBoxShadow?: boolean;
}

const CardItemBase = (props: CardItemBaseProps) => {
  const {
    children,
    disableAnimation = false,
    disableBorder = false,
    disableBoxShadow = false,
    ...restProps
  } = props;

  return (
    <Container
      disableAnimation={disableAnimation}
      disableBorder={disableBorder}
      disableBoxShadow={disableBoxShadow}
      {...restProps}
    >
      {children}
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "disableAnimation" &&
    propName !== "disableBorder" &&
    propName !== "disableBoxShadow",
})<Omit<CardItemBaseProps, "children">>((props) => {
  const { disableAnimation, disableBorder, disableBoxShadow } = props;

  return {
    position: "relative",
    top: 0,

    width: "100%",
    height: "auto",

    transition: "all 0.2s",
    cursor: "pointer",
    border: disableBorder ? "none" : "1px solid #dce0e0",
    borderRadius: 5,
    overflow: "hidden",

    ["&:hover"]: {
      top: disableAnimation ? 0 : -4,
      boxShadow: disableAnimation ? "unset" : "0 22px 40px rgba(0,0,0,.15)",
    },

    ["&:after"]: {
      display: disableBoxShadow ? "none" : "block",
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(transparent 0%,transparent 60%,rgba(0,0,0,.1) 66%,rgba(0,0,0,.5) 93%,rgba(0,0,0,.49) 100%)",
    },

    ["& .price-wrapper"]: {
      transform: "scale(1)",
      transition: "all  0.2s",
    },

    ["&:hover .price-wrapper"]: {
      transform: "scale(1.1)",
    },
  };
});

export default CardItemBase;
