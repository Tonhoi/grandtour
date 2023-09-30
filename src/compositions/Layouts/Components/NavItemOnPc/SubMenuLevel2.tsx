import { Link } from "@/components";
import { Box, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import styles from "./NavItem.module.scss";
import { NavBarChildren } from "@/interfaces/Navbar";

interface SubMenuLevel2Props {
  data: NavBarChildren;
  showSubMenu: Array<boolean>;
  variants: {
    open: { opacity: number; scale: number };
    closed: { opacity: number; scale: number };
  };
}

const cx = classNames.bind(styles);
const SubMenuLevel2 = (props: SubMenuLevel2Props) => {
  const { data, variants, showSubMenu } = props;

  return (
    <motion.ul
      variants={variants}
      animate={showSubMenu[data.id] ? "open" : "closed"}
      className={cx("sub-menu-ul")}
    >
      {showSubMenu[data.id] &&
        data.children.map((elem) => {
          return (
            <Box
              component={"li"}
              key={elem.id}
              className={cx("grand-child-link")}
            >
              <Link underline="none" href="#">
                <Typography variant={"caption"} className={cx("nav-title")}>
                  {elem.name}
                </Typography>
              </Link>
            </Box>
          );
        })}
    </motion.ul>
  );
};

export default SubMenuLevel2;
