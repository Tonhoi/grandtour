import { Box, styled } from "@mui/material";
import { ImageProps } from "next/image";

import { Image, HeadLine } from "@/components";

interface ReasonCardItemProps {
  src: ImageProps["src"];
  title: string;
  sub_title: string;
}

const ReasonCardItem = (props: ReasonCardItemProps) => {
  const { src, sub_title, title, ...restProps } = props;

  return (
    <Container {...restProps}>
      <Box className={"image-wrapper"}>
        <Image src={src} className="img" />
      </Box>

      <HeadLine title={title} sub_title={sub_title} className="card-content" />
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["& .image-wrapper"]: {
      position: "relative",
      width: 150,
      height: 150,
      margin: "11px auto 20px",

      ["& .img"]: {
        objectFit: "cover",
      },
    },

    ["& .card-content"]: {
      ["& .title"]: {
        fontSize: 20,
      },

      ["& .sub-title"]: {
        margin: "11px 0 20px",
        textAlign: "center",
      },
    },
  };
});

export default ReasonCardItem;
