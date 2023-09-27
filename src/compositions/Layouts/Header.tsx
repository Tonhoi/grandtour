import Image from "@/components/Image";
import {
  styled,
  Box,
  Container as MuiContainer,
  Stack,
  Badge,
} from "@mui/material";
import image from "@/assets/images";
import { NAVDATA } from "@/constant";
import { MenuIcon, CartIcon } from "@/components";
import NavItem from "./Components/NavItem/NavItem";
import useToggle from "@/hooks/useToggle";
import { useMedia } from "@/hooks/useMedia";
import HeaderOnMobile from "./Components/HeaderOnMobile";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const { on, toggleOff, toggleOn } = useToggle();

  const { isMdUp } = useMedia();

  return (
    <MuiContainer maxWidth={"lg"}>
      <Container>
        <Box className={"logo-wrapper"}>
          {isScrolled ? (
            <Image src={image.logo_light} className="img" />
          ) : (
            <Image src={image.logo} className="img" />
          )}
        </Box>

        <Stack className="header-right">
          {isMdUp && <NavItem NavData={NAVDATA} />}

          <Stack className={"actions"}>
            <MenuIcon className="menu-icon" onClick={toggleOn} />

            <Badge badgeContent={1} color="error">
              <CartIcon className="cart-icon" />
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

    ["& .header-right"]: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      justifyContent: "right",

      ["& .actions"]: {
        flexDirection: "row",
        alignItems: "center",
      },

      ["& :where(.menu-icon, .cart-icon)"]: {
        cursor: "pointer",
      },

      ["& .menu-icon"]: {
        marginRight: 8,
      },
    },
  };
});

export default Header;
