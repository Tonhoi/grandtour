import { Box, styled } from "@mui/material";
import StarIcon from "../Icons/StarIcon";

interface CardStarProps {}

const CardStar = (props: CardStarProps) => {
  return (
    <Container>
      <StarIcon className="icon" />
      <StarIcon className="icon" />
      <StarIcon className="icon" />
      <StarIcon className="icon" />
      <StarIcon className="icon" />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    color: "#1EC6B6",

    ["& .icon"]: {
      width: 14,
      height: 14,
    },
  };
});

export default CardStar;
