import { Box, BoxProps, Typography, styled } from "@mui/material";

type variantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "overline"
  | "inherit"
  | "caption"
  | "button"
  | "body1"
  | "body2";

interface HeadLineProps extends BoxProps {
  title: string;
  sub_title: string;
  variantTitle?: variantType;
  variantSubtitle?: variantType;
}

const HeadLine = (props: HeadLineProps) => {
  const {
    title,
    sub_title,
    variantTitle = "h2",
    variantSubtitle = "body2",
    ...restProps
  } = props;

  return (
    <Container {...restProps}>
      <Typography variant={variantTitle} className="title">
        {title}
      </Typography>

      <Typography variant={variantSubtitle} className="sub-title">
        {sub_title}
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    textAlign: "center",

    ["& .title"]: {
      fontSize: 36,
      fontWeight: 800,
      lineHeight: "1.3",
    },

    ["& .sub-title"]: {
      fontSize: 15,
      fontWeight: 500,
      color: "#8D9199",
      lineHeight: "1.7",
    },
  };
});

export default HeadLine;
