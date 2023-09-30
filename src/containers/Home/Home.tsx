import { styled, Box, Grid, Container as MuiContainer } from "@mui/material";

import ThumbnailVideo from "./Components/ThumbnailVideo";
import {
  PostCardItem,
  TripCardItem,
  ReasonCardItem,
  CardItemBasic,
  HeadLine,
} from "@/components";
import {
  POPULAR_DESTINATION_ITEMS,
  BEST_VALUE_TRIPS_ITEMS,
  POST_ITEMS,
  REASONITEM,
} from "@/constant";

const Home = () => {
  return (
    <Container>
      <ThumbnailVideo />

      <MuiContainer>
        <HeadLine
          title="Popular Destinations"
          sub_title="World's best tourist destinations"
          className="headline"
        />

        <Grid container spacing={4}>
          {POPULAR_DESTINATION_ITEMS.map((el, idx) => (
            <Grid item lg={3} md={3} sm={4} xs={12} key={idx}>
              <CardItemBasic src={el.src} title={el.title} />
            </Grid>
          ))}
        </Grid>

        <HeadLine
          title="Best Value Trips"
          sub_title="Best offers trips from us"
          className="headline"
        />

        <Grid container spacing={4}>
          {BEST_VALUE_TRIPS_ITEMS.map((el, idx) => (
            <Grid item lg={4} md={4} sm={4} xs={12} key={idx}>
              <TripCardItem
                src={el.src}
                title={el.title}
                description={el.description}
                count_viewer={el.count_viewer}
                time={el.time}
                price={el.price}
                reduced_price={el.reduce_price}
                is_sale={el.is_sale}
              />
            </Grid>
          ))}
        </Grid>

        <HeadLine
          title="Why Choose Us"
          sub_title={"Here are reasons you should plan trip with us"}
          className={"headline"}
        />

        <Grid container spacing={6}>
          {REASONITEM.map((el, idx) => (
            <Grid item lg={4} md={4} sm={4} xs={12} key={idx}>
              <ReasonCardItem
                src={el.src}
                title={el.title}
                sub_title={el.sub_title}
              />
            </Grid>
          ))}
        </Grid>
      </MuiContainer>

      <Box className={"banner"} />

      <MuiContainer>
        <HeadLine
          title="Articles & Tips"
          sub_title="Explore some of the best tips from around the world"
          className="headline"
        />

        <Grid container spacing={4}>
          {POST_ITEMS.map((el, idx) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={idx}>
              <PostCardItem
                src={el.src}
                time={el.time}
                title={el.title}
                description={el.description}
              />
            </Grid>
          ))}
        </Grid>
      </MuiContainer>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .headline"]: {
      marginTop: 50,
      marginBottom: 50,
    },

    ["& .banner"]: {
      marginTop: 70,

      backgroundImage:
        "url(https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg)",
      height: "60vh",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      [theme.breakpoints.up("md")]: {
        backgroundAttachment: "fixed",
      },
    },
  };
});

export default Home;
