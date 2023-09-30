import { Box, Stack, StackProps, Typography, styled } from "@mui/material";

import { Link } from "@/components";
import { MENUFOOTER } from "@/constant";

interface FooterBarProps extends StackProps {}

const FooterBar = (props: FooterBarProps) => {
  return (
    <Container {...props}>
      <Typography variant="caption">
        © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
      </Typography>

      <Box component={"ul"} className={"menu-footer-list"}>
        {MENUFOOTER.map((el, idx) => (
          <Box component={"li"} className={"menu-footer-item"} key={idx}>
            <Link href={"/"} className={"menu-footer-link"}>
              <Typography variant="caption" className={"menu-footer-title"}>
                {el.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "start",
    },

    ["& .menu-footer-list"]: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      gap: 20,

      ["& .menu-footer-link"]: {
        textDecoration: "none",

        ["& .menu-footer-title"]: {
          color: "#ccc",
        },
      },

      [theme.breakpoints.down("md")]: {
        marginBottom: 10,
      },
    },
  };
});

export default FooterBar;
