import { Box, BoxProps, styled } from "@mui/material";

import { Image } from "@/components";
import HeadLine from "@/components/HeadLine";

interface FooterIntroduceProps extends BoxProps {}

const FooterIntroduce = (props: FooterIntroduceProps) => {
  return (
    <Container {...props}>
      <HeadLine
        title="Our Awards"
        sub_title="London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom."
        className={"headline"}
      />

      <Box className={"image-wrapper"}>
        <Image
          src={
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
          }
          className="img"
        />
      </Box>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    width: "100%",

    ["& .headline"]: {
      textAlign: "left",
    },

    ["& .image-wrapper"]: {
      position: "relative",
      width: 246,
      height: 113,
      margin: "30px 0 8px",

      ["& .img"]: {
        objectFit: "cover",
      },
    },
  };
});

export default FooterIntroduce;
