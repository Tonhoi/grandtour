import { Box, Stack, Typography, styled } from "@mui/material";

import { NAVMOBILEDATA, SOCIALMOBILEITEMS } from "@/constant";
import {
  // icon
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

      <Box component={"nav"} className={`nav ${isOpenMenu ? "active" : ""}`}>
        <Box className={"close-icon-wrapper"} onClick={handleCloseMenu}>
          <CloseIcon className="close-icon" />
        </Box>

        {/* list */}
        <Box component={"ul"} className="nav-list">
          {NAVMOBILEDATA.map((el, idx) => (
            <Box component={"li"} className="nav-item" key={idx}>
              <Link
                underline="none"
                href={"/"}
                component={"a"}
                className="nav-link"
              >
                <Typography variant="caption" className="nav-title">
                  {el.name}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>

        {/* gallery card */}
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
          reduced_price="$4.200"
        />

        {/* social */}

        <Stack className={"nav-social"}>
          {SOCIALMOBILEITEMS.map((el, idx) => (
            <Link href={"/"} className={"nav-social-icon"} key={idx}>
              <el.icon cursor={"pointer"} />
            </Link>
          ))}
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

    ["& .nav"]: {
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

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 44,
        height: 44,

        margin: "0 0 24px auto",
        borderRadius: "50%",
        backgroundColor: "#FF4A52",

        transition: "all linear 0.1s",
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
      ["&-list"]: {
        listStyle: "none",
        marginBottom: theme.spacing(10),
      },

      ["&-title"]: {
        display: "block",
        padding: "4px 0",
        fontSize: 24,
        fontWeight: 800,

        color: theme.palette.common.black,
        transition: "color .2s linear,background .1s linear",

        ["&:hover"]: {
          color: "#FF4A52",
        },
      },

      // social
      ["&-social"]: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: theme.spacing(5),
        gap: 15,

        ["&-icon"]: {
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
