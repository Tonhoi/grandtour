import { Box, BoxProps, Typography, styled } from "@mui/material";
import CardTourPrice from "./CardTourPrice";
import CardStar from "./CardStar";
import { useRouter } from "next/router";

interface GalleryCardItemProps extends BoxProps {
  backgroundImage: string;
  href: string;
  title: string;
  price: string;
  reducedPrice?: string;
}

const GalleryCardItem = (props: GalleryCardItemProps) => {
  const {
    backgroundImage,
    href,
    title,
    price,
    reducedPrice = "",
    ...restProps
  } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Container
      backgroundImage={backgroundImage}
      {...restProps}
      onClick={handleClick}
    >
      <Box className={"card_info_wrapper"}>
        <CardTourPrice
          price={price}
          reducedPrice={reducedPrice}
          className="price"
        />

        <Typography variant="h5" className={"title"}>
          {title}
        </Typography>

        <CardStar />
      </Box>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundImage",
})<{ backgroundImage: string }>(({ backgroundImage, theme }) => {
  return {
    position: "relative",
    aspectRatio: "263 /200",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 5,
    backgroundPosition: "center center",
    cursor: "pointer",

    ["& .card_info_wrapper"]: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",

      padding: "5px 15px 15px 15px",

      ["& .price"]: {
        position: "relative",
        right: 15,
        marginBottom: 12,
      },

      ["& .title"]: {
        fontSize: "19px",
        fontWeight: "bold",
        color: theme.palette.common.white,
      },
    },
  };
});

export default GalleryCardItem;
