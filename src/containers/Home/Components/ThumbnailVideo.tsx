import { Fragment, useState } from "react";
import Select, { CSSObjectWithLabel } from "react-select";
import { Box, Button, Typography, styled } from "@mui/material";

import {
  ArrowIcon,
  HeadLine,
  CalendarIcon,
  DollarIcon,
  SearchIcon,
} from "@/components";
import {
  CATEGORYOPTIONS,
  CITYOPTIOS,
  DATEOPTIONS,
  DESTINATIONOPTIONS,
  MONTHOPTIONS,
} from "@/constant";
import useToggle from "@/hooks/useToggle";

const customStyles = {
  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: "none", // Ẩn indicatorSeparator
  }),
};

const ThumbnailVideo = () => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const { on: isOpenadvancedOptions, toggle } = useToggle();

  return (
    <Container>
      <video
        src="/videos/videoplayback.mp4"
        autoPlay={true}
        muted={true}
        className={isOpenadvancedOptions ? "active" : ""}
      />

      <Box className={"place-find-wrapper"}>
        <HeadLine
          title="Where do you want to go?"
          sub_title="Trips, experiences, and places. All in one service."
          className={"standard_wrapper"}
        />

        <Box className={"select-wrapper"}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={CITYOPTIOS}
            placeholder={"Destination, city"}
            components={{
              DropdownIndicator: () => <SearchIcon className={"icon"} />,
            }}
            styles={customStyles}
          />

          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={MONTHOPTIONS}
            placeholder={"Any Month"}
            components={{
              DropdownIndicator: () => <CalendarIcon className={"icon"} />,
            }}
            styles={customStyles}
          />

          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={DATEOPTIONS}
            placeholder={"Sort By Date"}
            components={{
              DropdownIndicator: () => <CalendarIcon className={"icon"} />,
            }}
            styles={customStyles}
          />

          <Button variant="contained" className={"btn"}>
            <Typography variant="caption" fontWeight={"bold"}>
              Search
            </Typography>
          </Button>

          {isOpenadvancedOptions && (
            <Fragment>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={CATEGORYOPTIONS}
                placeholder={"All Categories"}
                styles={customStyles}
              />

              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={DESTINATIONOPTIONS}
                placeholder={"Any Destinations"}
                styles={customStyles}
              />

              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={CITYOPTIOS}
                placeholder={"Max budget ex. 500"}
                components={{
                  DropdownIndicator: () => (
                    <DollarIcon className={"icon dollar-icon"} />
                  ),
                }}
                styles={customStyles}
              />
            </Fragment>
          )}

          <Box className={"advanced-options"} onClick={toggle}>
            <ArrowIcon
              className={`arrow-icon ${isOpenadvancedOptions ? "active" : ""}`}
            />
            <Typography variant="caption">Advanced Search</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    marginBottom: theme.spacing(3),

    ["& video"]: {
      width: "100%",
      height: 800,
      objectFit: "cover",

      [theme.breakpoints.down("md")]: {
        height: 500,

        ["&.active"]: {
          height: 700,
        },
      },
    },

    ["& .place-find-wrapper"]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",

      width: 1200,
      maxWidth: "calc(100% - 24px)",

      ["& .select-wrapper"]: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 24,

        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "1fr",
        },

        ["& .icon"]: {
          width: 18,
          height: 18,
          marginRight: 8,
        },

        ["& .dollar-icon"]: {
          color: "#B7B7B7",
        },

        ["& .btn"]: {
          padding: "10px 16px",
          backgroundColor: "#FF4A52",
          textTransform: "capitalize",

          ["&:hover"]: {
            backgroundColor: "#1EC6B6",
          },
        },

        ["& .advanced-options"]: {
          display: "flex",
          alignitems: "center",
          width: "fit-content",
          gap: 5,

          gridColumn: "1 / span 4",
          color: theme.palette.common.white,
          cursor: "pointer",

          [theme.breakpoints.down("md")]: {
            gridColumn: "auto",
          },

          ["& .arrow-icon"]: {
            transform: "rotate(90deg)",

            ["&.active"]: {
              transform: "rotate(-90deg)",
            },
          },
        },
      },

      ["& .standard_wrapper"]: {
        marginBottom: 20,

        ["& .title"]: {
          color: theme.palette.common.white,

          [theme.breakpoints.down("md")]: {
            fontSize: 24,
          },
        },

        ["& .sub-title"]: {
          color: theme.palette.common.white,
        },
      },
    },
  };
});

export default ThumbnailVideo;
