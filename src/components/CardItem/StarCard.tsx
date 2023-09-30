import { Box, BoxProps, styled } from "@mui/material";

import { StarIcon } from "@/components";

interface StarCardProps extends BoxProps {
  count: number;
  count_active: number;
}

const StarCard = (props: StarCardProps) => {
  const { count, count_active, ...restProps } = props;
  return (
    <Container {...restProps}>
      {Array(count)
        .fill(null)
        .map((el, idx) => (
          <StarIcon
            className={`icon ${count_active > idx ? "active" : ""}`}
            key={idx}
          />
        ))}
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    color: "#1EC6B6",

    ["& .icon"]: {
      width: 14,
      height: 14,
      color: "#ccc",

      ["&.active"]: {
        color: "#1EC6B6",
      },
    },
  };
});

export default StarCard;
