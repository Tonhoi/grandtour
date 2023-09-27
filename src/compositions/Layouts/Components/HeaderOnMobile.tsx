import { Box, Stack, styled } from "@mui/material";

import { NAVMOBILEDATA } from "@/constant";
import {
  // icon
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
  YoutubeIcon,
  GalleryCardItem,
  CloseIcon,

  // components
  Spacing,
  Overlay,
  Link,
} from "@/components";

interface HeaderOnMobileProps {
  isOpenMenu: boolean;
  handleCloseMenu: () => void;
}

const HeaderOnMobile = ({
  isOpenMenu,
  handleCloseMenu,
}: HeaderOnMobileProps) => {
  return (
    <Container>
      <Overlay
        backgroundColor="transparent"
        position={"fixed"}
        className={`overlay ${isOpenMenu ? "active" : ""}`}
        onClick={handleCloseMenu}
      />

      <Box
        component={"nav"}
        className={`nav-mobile-wrapper ${isOpenMenu ? "active" : ""}`}
      >
        <Box className={"close-icon-wrapper"} onClick={handleCloseMenu}>
          <CloseIcon className="close-icon" />
        </Box>

        <Spacing spacing={3} />

        {/* list */}
        <Box component={"ul"} className="nav-mobile-list">
          {NAVMOBILEDATA.map((el, idx) => (
            <Box component={"li"} className="nav-mobile-item" key={idx}>
              <Link href={"/"} component={"a"} className="nav-mobile-link">
                {el.name}
              </Link>
            </Box>
          ))}
        </Box>

        <Spacing spacing={10} />

        {/* galeery card */}

        {/* using map method here */}
        <GalleryCardItem
          backgroundImage={
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg"
          }
          href={"/"}
          title="Swiss Alps Trip"
          price="$3.900"
        />

        <Spacing spacing={2} />

        <GalleryCardItem
          backgroundImage={
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg"
          }
          href={"/"}
          title="Swiss Alps Trip"
          price="$4.900"
          reducedPrice="$4.200"
        />

        {/* social */}

        <Stack className={"social-wrapper"}>
          {/* using map method here */}

          <Link href={"/"} className={"icon-wrapper"}>
            <FacebookIcon cursor={"pointer"} />
          </Link>

          <Link href={"/"} className={"icon-wrapper"}>
            <TwitterIcon cursor={"pointer"} />
          </Link>

          <Link href={"/"} className={"icon-wrapper"}>
            <PinterestIcon cursor={"pointer"} />
          </Link>

          <Link href={"/"} className={"icon-wrapper"}>
            <InstagramIcon cursor={"pointer"} />
          </Link>

          <Link href={"/"} className={"icon-wrapper"}>
            <YoutubeIcon cursor={"pointer"} />
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .overlay"]: {
      backdropFilter: "blur(20px)",
      filter: "blur(20px)",
    },

    ["& .nav-mobile-wrapper"]: {
      position: "fixed",
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 999,
      width: 360,
      padding: "35px 40px",
      backgroundColor: "#FFFFFFD9",
      transform: "translateX(100%)",
      transition: "all linear 0.1s",
      overflowY: "auto",

      [theme.breakpoints.down("md")]: {
        width: 270,
      },

      ["&.active"]: {
        transform: "translateX(0)",
      },

      ["& .close-icon-wrapper"]: {
        position: "relative",
        top: 0,
        transition: "all linear 0.1s",

        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "#FF4A52",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginLeft: "auto",
        cursor: "pointer",

        ["&:hover"]: {
          top: -5,
        },

        ["& .close-icon"]: {
          width: 30,
          height: 30,
          color: theme.palette.common.white,
        },
      },

      //   nav-list
      ["& .nav-mobile-list"]: {
        listStyle: "none",

        ["& .nav-mobile-item"]: {
          padding: "7px 0",

          ["& .nav-mobile-link"]: {
            display: "block",
            textDecoration: "none",
            color: theme.palette.common.black,
            fontWeight: "bold",
            fontSize: "24px",
            transition: "color .2s linear,background .1s linear",

            ["&:hover"]: {
              color: "#FF4A52",
            },
          },
        },
      },

      // social
      ["& .social-wrapper"]: {
        marginTop: theme.spacing(5),
        flexDirection: "row",
        alignItems: "center",
        gap: 15,

        ["& .icon-wrapper"]: {
          color: theme.palette.common.black,
          transition: "all linear .2s",

          ["&:hover"]: {
            color: "#FF4A52",
          },
        },
      },
    },
  };
});

export default HeaderOnMobile;
