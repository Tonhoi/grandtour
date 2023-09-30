import { Box, BoxProps, Typography, styled } from "@mui/material";

import { Image } from "@/components";
import { IMAGE_LIST } from "@/constant";

interface FooterImageListProps extends BoxProps {}

const FooterImageList = (props: FooterImageListProps) => {
  return (
    <Container {...props}>
      <Typography variant="h2" className={"title"}>
        Recent Trips
      </Typography>

      <Box component={"ul"} className={"image-list"}>
        {IMAGE_LIST.map((el, idx) => (
          <Box component={"li"} className="image-item" key={idx}>
            <Image src={el.src} className={"img"} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    width: "100%",

    ["& .image-list"]: {
      display: "flex",
      flexWrap: "wrap",

      ["& .image-item"]: {
        width: "29.33335%",
        aspectRatio: "1 / 1",
        position: "relative",
        margin: 4,

        ["& .img"]: {
          objectFit: "cover",
        },
      },
    },
  };
});

export default FooterImageList;
