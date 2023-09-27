import { CONTACTUS } from "@/constant";
import { Box, BoxProps, Typography, styled } from "@mui/material";

interface FooterContactUsProps extends BoxProps {}

const FooterContactUs = (props: FooterContactUsProps) => {
  return (
    <Container {...props}>
      <Typography variant="h2" className={"title"}>
        Contact Info
      </Typography>

      {CONTACTUS.map((el, idx) => (
        <Box className={"contact-wrapper"} key={idx}>
          <Box className={"icon-wrapper"}>
            <el.icon className={"icon"} />
          </Box>

          <Typography variant="body2">{el.title}</Typography>
        </Box>
      ))}
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    width: "100%",
    color: "#ccc",

    ["& .contact-wrapper"]: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 0",

      ["& .icon"]: {
        width: 15,
        height: 15,
      },
    },
  };
});

export default FooterContactUs;
