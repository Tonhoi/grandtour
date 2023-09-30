import { CSSProperties, ReactNode } from "react";
import { Box, BoxProps, styled } from "@mui/material";

interface OverlayProps extends BoxProps {
  children?: ReactNode;
  backgroundColor: CSSProperties["backgroundColor"];
}

const Overlay = (props: OverlayProps) => {
  const { children, backgroundColor, ...restProps } = props;

  return (
    <Container backgroundColor={backgroundColor} {...restProps}>
      {children}
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundColor",
})<{ backgroundColor: CSSProperties["backgroundColor"] }>(
  ({ backgroundColor }) => {
    return {
      inset: 0,
      zIndex: 10,

      display: "none",
      backgroundColor: backgroundColor,

      "&.active": {
        display: "block",
        cursor: "pointer",
      },
    };
  }
);

export default Overlay;
