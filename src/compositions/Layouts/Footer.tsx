import { styled, Box, Container as MuiContainer, Stack } from "@mui/material";

import {
  FooterIntroduce,
  FooterContactUs,
  FooterImageList,
  FooterBar,
} from "@/compositions";

const Footer = () => {
  return (
    <Container>
      <MuiContainer>
        <Stack className={"footer-top"}>
          <FooterIntroduce />

          <FooterContactUs />

          <FooterImageList />
        </Stack>
      </MuiContainer>

      <Stack className={"footer-bottom-wrapper"}>
        <MuiContainer>
          <FooterBar />
        </MuiContainer>
      </Stack>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.black,
    marginTop: 80,

    ["& .title"]: {
      fontSize: 18,
      color: theme.palette.common.white,
      fontWeight: "bold",
      margin: "10px 0",
    },

    ["& .footer-top"]: {
      padding: "50px 0",
      flexDirection: "row",
      alignItems: "start",
      justifyContent: "space-between",

      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },

    ["& .footer-bottom-wrapper"]: {
      position: "relative",
      padding: "30px 0 20px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#ccc",

      ["&:after"]: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",

        height: 1,
        backgroundColor: "#222",
      },
    },
  };
});

export default Footer;
