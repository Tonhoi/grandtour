import { Box, BoxProps, Typography, styled } from "@mui/material";

interface TourPriceCardProps extends BoxProps {
  reduced_price: string;
  price: string;
}

const TourPriceCard = (props: TourPriceCardProps) => {
  const { reduced_price, price, ...restprops } = props;

  return (
    <Container reduced_price={reduced_price} {...restprops}>
      <Typography variant="caption" className="no-reduced-price">
        {price}
      </Typography>

      <Typography variant="caption" className="reduced-price">
        {reduced_price}
      </Typography>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "reduced_price",
})<{ reduced_price: string }>(({ reduced_price, theme }) => {
  return {
    padding: "3px 10px 2px 10px",
    backgroundColor: "#FF4A52",
    color: theme.palette.common.white,
    width: "fit-content",

    ["& .no-reduced-price"]: {
      fontSize: reduced_price ? "12px" : "15px",
      fontWeight: reduced_price ? 400 : 700,
      opacity: reduced_price ? "0.6" : 1,
      marginRight: 5,
      textDecoration: reduced_price ? "line-through" : "",
    },

    ["& .reduced-price"]: {
      fontWeight: "700",
      fontSize: "15px",
    },
  };
});

export default TourPriceCard;
