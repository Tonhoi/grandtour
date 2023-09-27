import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import CardItemBase from "./CardItemBase";
import { Image } from "@/components";
import CardStar from "./CardStar";
import ClockIcon from "../Icons/ClockIcon";
import { ImageProps } from "next/image";
import CardTourPrice from "./CardTourPrice";

interface TripCardItemProps {
  src: ImageProps["src"];
  title: string;
  description: string;
  countViewer: string;
  time: string;
  isSale?: boolean;
  price: string;
  reducedPrice: string;
}

const TripCardItem = (props: TripCardItemProps) => {
  const {
    time,
    countViewer,
    description,
    title,
    src,
    isSale = false,
    price,
    reducedPrice,
  } = props;

  return (
    <CardItemBase disableBoxShadow overflow={"unset !important"}>
      <Container>
        <Box className={"image-wrapper"}>
          <Image src={src} className={"img"} />
          <CardTourPrice
            price={price}
            reducedPrice={reducedPrice}
            className="price-wrapper"
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
            <Box className={"card-left"}>
              <CardStar />
              <Typography variant="caption">{countViewer}</Typography>
            </Box>

            <Box className={"card-right"}>
              {/* icon */}
              <Box className={"icon-wrapper"}>
                <ClockIcon className="clock-icon" />
              </Box>

              <Typography variant={"caption"} fontWeight={"700"}>
                {time}
              </Typography>
            </Box>
          </Stack>
        </Box>

        {isSale && (
          <Typography variant="caption" className="sale">
            Sale
          </Typography>
        )}
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
    },

    ["& .card-content"]: {
      padding: "15px",
      ["& .card-title"]: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: "1.4",
      },

      ["& .card-description"]: {
        fontSize: 14,
        margin: "9px 0 17px",
      },

      ["& .card-footer"]: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        ["& .card-left"]: {
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
        },

        ["& .card-right"]: {
          display: "flex",
          alignItems: "center",

          ["& .clock-icon"]: {
            width: 12,
            height: 12,
            marginRight: 3,
          },
        },
      },
    },

    ["& .price-wrapper"]: {
      position: "absolute",
      bottom: 20,
      left: 0,
    },

    ["& .sale"]: {
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translate(50%, -50%)",
      padding: "10px 7px",
      borderRadius: "50%",
      backgroundColor: "#1EC6B6",
      color: theme.palette.common.white,
      fontWeight: "bold",
    },
  };
});

export default TripCardItem;
