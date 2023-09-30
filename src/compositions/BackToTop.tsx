import { useCallback, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useWindowScroll } from "react-use";

import { ArrowIcon } from "@/components";
import useToggle from "@/hooks/useToggle";

const BackToTop = () => {
  const { y } = useWindowScroll();
  const { toggleOn, toggleOff, on } = useToggle();

  const handleScrollTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (y < 400 && on) {
      toggleOff();
    } else if (y > 400 && !on) {
      toggleOn();
    }
  }, [y, toggleOff, toggleOn, on]);

  return (
    <Container on={on} onClick={handleScrollTop}>
      <ArrowIcon className="arrow-icon" />
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "on",
})<{ on: boolean }>(({ on, theme }) => {
  return {
    position: "fixed",
    bottom: 20,
    right: 10,
    zIndex: 999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    padding: 10,

    color: theme.palette.common.white,
    backgroundColor: "#1EC6B6",
    borderRadius: "50%",

    opacity: on ? 1 : 0,
    transition: "all .1s",
    cursor: "pointer",

    ["&:hover"]: {
      transform: "translate(0, -5px)",
      boxShadow: "0 8px 15px rgba(0,0,0,.1)",
    },

    ["& .arrow-icon"]: {
      transform: "rotate(-90deg)",
      width: 18,
      height: 24,
    },
  };
});

export default BackToTop;
