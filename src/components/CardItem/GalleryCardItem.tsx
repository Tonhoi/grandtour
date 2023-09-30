import { Box, BoxProps, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { TourPriceCard, StarCard } from "@/components";

interface GalleryCardItemProps extends BoxProps {
  backgroundImage: string;
  href: string;
  title: string;
  price: string;
  reduced_price?: string;
}

const GalleryCardItem = (props: GalleryCardItemProps) => {
  const {
    backgroundImage,
    href,
    title,
    price,
    reduced_price = "",
    ...restProps
  } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Container
      backgroundImage={backgroundImage}
      onClick={handleClick}
      {...restProps}
    >
      <Box className={"card-content"}>
        <TourPriceCard
          price={price}
          reduced_price={reduced_price}
          className="card-price"
        />

        <Typography variant="h5" className={"card-title"}>
          {title}
        </Typography>

        <StarCard count={5} count_active={4} />
      </Box>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundImage",
})<{ backgroundImage: string }>(({ backgroundImage, theme }) => {
  return {
    position: "relative",
    borderRadius: 5,

    aspectRatio: "263 /200",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    cursor: "pointer",

    ["& .card"]: {
      ["&-content"]: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",

        padding: "5px 15px 15px 15px",
      },

      ["&-price"]: {
        position: "relative",
        right: 15,
        marginBottom: 12,
      },

      ["&-title"]: {
        fontSize: "19px",
        fontWeight: "bold",
        color: theme.palette.common.white,
      },
    },
  };
});

export default GalleryCardItem;
