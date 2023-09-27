import { Box, BoxProps, Typography, styled } from "@mui/material";

interface CardTourPriceProps extends BoxProps {
  reducedPrice: string;
  price: string;
}

const CardTourPrice = (props: CardTourPriceProps) => {
  const { reducedPrice, price, ...restprops } = props;

  return (
    <Container reducedPrice={reducedPrice} {...restprops}>
      <Typography variant="caption" className="no-reduced-price">
        {price}
      </Typography>
      <Typography variant="caption" className="reduced-price">
        {reducedPrice}
      </Typography>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "reducedPrice",
})<{ reducedPrice: string }>(({ reducedPrice, theme }) => {
  return {
    padding: "3px 10px 2px 10px",
    backgroundColor: "#FF4A52",
    color: theme.palette.common.white,
    width: "fit-content",

    ["& .no-reduced-price"]: {
      fontSize: reducedPrice ? "12px" : "15px",
      fontWeight: reducedPrice ? 400 : 700,
      opacity: reducedPrice ? "0.6" : 1,
      marginRight: 5,
      textDecoration: reducedPrice ? "line-through" : "",
    },

    ["& .reduced-price"]: {
      fontWeight: "700",
      fontSize: "15px",
    },
  };
});

export default CardTourPrice;
