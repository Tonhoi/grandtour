import { CSSProperties } from "react";
import { Box, BoxProps, Typography, styled } from "@mui/material";
import { CardItemBase } from "@/components";

interface CardItemBasicProps extends BoxProps {
  title: string;
  src: CSSProperties["backgroundImage"];
}

const CardItemBasic = (props: CardItemBasicProps) => {
  const { title, src, ...restProps } = props;

  return (
    <CardItemBase disableBorder {...restProps}>
      <Container backgroundImage={src}>
        <Typography variant="h3" className={"title"}>
          {title}
        </Typography>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundImage",
})<{ backgroundImage: CSSProperties["backgroundImage"] }>(
  ({ backgroundImage, theme }) => {
    return {
      position: "relative",
      aspectRatio: "241 / 300",
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",

      [theme.breakpoints.down("sm")]: {
        aspectRatio: "590 / 300",
      },

      ["& .title"]: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,

        padding: "5px 15px 15px 15px",
        fontSize: 24,

        fontWeight: 800,
        color: theme.palette.common.white,
      },
    };
  }
);

export default CardItemBasic;
