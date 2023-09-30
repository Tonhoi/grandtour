import { useEffect } from "react";
import {
  styled,
  Box,
  Container as MuiContainer,
  Stack,
  Badge,
} from "@mui/material";

import Image from "@/components/Image";
import useToggle from "@/hooks/useToggle";
import { useMedia } from "@/hooks/useMedia";
import logo from "@/assets/images";
import { NAVDATA } from "@/constant";
import { MenuIcon, CartIcon } from "@/components";
import NavItemOnPc from "./Components/NavItemOnPc/NavItem";
import HeaderOnMobile from "./Components/HeaderOnMobile";
import { NavBarItem } from "@/interfaces/Navbar";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const { on, toggleOff, toggleOn } = useToggle();

  const { isMdUp } = useMedia();

  useEffect(() => {
    if (!on) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [on]);

  return (
    <MuiContainer maxWidth={"lg"}>
      <Container>
        <Box className={"logo-wrapper"}>
          <Image
            src={isScrolled ? logo.logo_light : logo.logo_dark}
            className="img"
          />
        </Box>

        <Stack className="header-right">
          {isMdUp && <NavItemOnPc NavData={NAVDATA as Array<NavBarItem>} />}

          <Stack className={"header-actions"}>
            <MenuIcon
              className="menu-icon"
              cursor={"pointer"}
              onClick={toggleOn}
            />

            <Badge badgeContent={1} color="error">
              <CartIcon className="cart-icon" cursor={"pointer"} />
            </Badge>
          </Stack>
        </Stack>

        <HeaderOnMobile isOpenMenu={on} handleCloseMenu={toggleOff} />
      </Container>
    </MuiContainer>
  );
};

const Container = styled(Stack)(() => {
  return {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    ["& .logo-wrapper"]: {
      position: "relative",
      width: 92,
      height: 74,

      ["& .img"]: {
        objectFit: "contain",
      },
    },

    ["& .header"]: {
      ["&-right"]: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "right",
      },

      ["&-actions"]: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      },
    },
  };
});

export default Header;
