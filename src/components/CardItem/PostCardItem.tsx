import { ImageProps } from "next/image";
import { Box, BoxProps, Button, Typography, styled } from "@mui/material";

import { Image, CardItemBase } from "@/components";

interface PostCardItemProps extends BoxProps {
  src: ImageProps["src"];
  time: string;
  title: string;
  description: string;
}

const PostCardItem = (props: PostCardItemProps) => {
  const { src, time, title, description, ...restProps } = props;

  return (
    <CardItemBase disableBoxShadow {...restProps}>
      <Container>
        <Box className={"image-wrapper"}>
          <Image src={src} className="img" />
        </Box>

        <Box className={"card-content"}>
          <Typography variant="caption" className="card-time">
            {time}
          </Typography>

          <Typography variant="h6" className="card-title">
            {title}
          </Typography>

          <Typography variant="body2" className="card-description">
            {description}
          </Typography>

          <Button variant="text" className={"btn"} disableRipple>
            Read More
          </Button>
        </Box>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box)(() => {
  return {
    ["& .image-wrapper"]: {
      aspectRatio: "392 / 259",
      position: "relative",

      ["& .img"]: {
        objectFit: "cover",
      },
    },

    ["& .card"]: {
      ["&-content"]: {
        minHeight: 300,
        padding: "20px 30px 30px",
        display: "flex",
        flexDirection: "column",

        ["& .btn"]: {
          marginTop: "auto",
          padding: "6px 8px 6px 0",
          color: "#222222",
          opacity: 0.5,
          width: "fit-content",
        },
      },

      ["&-time"]: {
        fontSize: 12,
        fontWeight: "bold",
        margin: "5px 0",
        letterSpacing: 0,
      },

      ["&-title"]: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: "1.4",
        marginBottom: 15,
      },

      ["&-description"]: {
        color: "#222222",
        fontSize: 15,
        margin: "11px 0 20px",
        fontWeight: 400,
        lineHeight: "1.6",

        // handle truncate
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
  };
});

export default PostCardItem;
