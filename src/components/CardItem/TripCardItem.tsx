import { Box, BoxProps, Stack, Typography, styled } from "@mui/material";
import { ImageProps } from "next/image";

import {
  Image,
  CardItemBase,
  StarCard,
  ClockIcon,
  TourPriceCard,
} from "@/components";

interface TripCardItemProps extends BoxProps {
  src: ImageProps["src"];
  title: string;
  description: string;
  count_viewer: string;
  time: string;
  is_sale?: boolean;
  price: string;
  reduced_price: string;
}

const TripCardItem = (props: TripCardItemProps) => {
  const {
    time,
    count_viewer,
    description,
    title,
    src,
    is_sale = false,
    price,
    reduced_price,
    ...restProps
  } = props;

  return (
    <CardItemBase disableBoxShadow overflow={"unset !important"} {...restProps}>
      <Container>
        <Box className={"image-wrapper"}>
          <Image src={src} className={"img"} />

          <TourPriceCard
            price={price}
            reduced_price={reduced_price}
            className="card-price"
          />
        </Box>

        <Box className={"card-content"}>
          <Typography variant="h4" className={"card-title"}>
            {title}
          </Typography>

          <Typography variant="body2" className={"card-description"}>
            {description}
          </Typography>

          <Stack className={"card-footer"}>
            <Box className={"card-footer-left"}>
              <StarCard count={5} count_active={4} />

              <Typography variant="caption">{count_viewer}</Typography>
            </Box>

            <Box className={"card-footer-right"}>
              <ClockIcon className="clock-icon" />

              <Typography variant={"caption"} fontWeight={"700"}>
                {time}
              </Typography>
            </Box>
          </Stack>

          <Typography
            variant="caption"
            className={`card-sale ${is_sale ? "active" : ""}`}
          >
            Sale
          </Typography>
        </Box>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .image-wrapper"]: {
      position: "relative",
      aspectRatio: "392 / 261",

      ["& .img"]: {
        objectFit: "cover",
      },

      ["& .card-price"]: {
        position: "absolute",
        bottom: 20,
        left: 0,
      },
    },

    ["& .card"]: {
      ["&-content"]: {
        padding: 15,
      },

      ["&-title"]: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: "1.4",
      },

      ["&-description"]: {
        fontSize: 14,
        margin: "9px 0 17px",
      },

      ["&-sale"]: {
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translate(50%, -50%)",

        display: "none",
        padding: "10px 7px",
        borderRadius: "50%",
        backgroundColor: "#1EC6B6",
        color: theme.palette.common.white,
        fontWeight: "bold",

        ["&.active"]: {
          display: "block",
        },
      },

      ["&-footer"]: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        ["&-left"]: {
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
        },

        ["& .clock-icon"]: {
          position: "relative",
          top: 2,
          width: 12,
          height: 12,
          marginRight: 3,
        },
      },
    },
  };
});

export default TripCardItem;
