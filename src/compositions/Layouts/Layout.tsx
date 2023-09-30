import { ReactNode, useEffect, useState } from "react";
import { styled, Box } from "@mui/material";
import { useWindowScroll } from "react-use";

import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../BackToTop";

interface LayouProps {
  children: ReactNode;
}

const Layout = ({ children }: LayouProps) => {
  const { y } = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const currentScrollY = y;

    if (currentScrollY <= 30) {
      setIsScrolled(true);
    } else if (currentScrollY > prevScrollY) {
      // Cuộn xuống
      setIsScrolled(true);
    } else {
      // Cuộn lên
      setIsScrolled(false);
    }

    // Lưu vị trí cuộn hiện tại cho lần sau
    setPrevScrollY(currentScrollY);
  }, [y]);

  return (
    <Container isScrolled={isScrolled} offsetTop={y}>
      <Box className={"header-wrapper"}>
        <Header isScrolled={isScrolled} />
      </Box>

      {children}
      <Footer />

      <BackToTop />
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "isScrolled" && propName !== "offsetTop",
})<{ isScrolled: Boolean; offsetTop: number }>(
  ({ isScrolled, offsetTop, theme }) => {
    return {
      ["& .header-wrapper"]: {
        position: "fixed",
        zIndex: 999,
        width: "100%",

        opacity: isScrolled && offsetTop > 30 ? 0 : 1,
        transform: isScrolled && offsetTop > 30 ? "translateY(-100%)" : "unset",
        backgroundColor: isScrolled ? "" : theme.palette.common.white,
        borderBottom: isScrolled ? "unset" : "1px solid #dce0e0",
        transition: "all 0.2s",

        color: isScrolled
          ? theme.palette.common.white
          : theme.palette.common.black,
      },
    };
  }
);

export default Layout;
