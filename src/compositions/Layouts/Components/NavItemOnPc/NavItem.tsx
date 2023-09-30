import { useState } from "react";
import { Typography, Box, List } from "@mui/material";
import { motion } from "framer-motion";
import classNames from "classnames/bind";

import { ArrowIcon, Link } from "@/components";
import { NavBarItem } from "@/interfaces/Navbar";
import styles from "./NavItem.module.scss";
import SubMenuLevel1 from "./SubMenuLevel1";
import SubMenuLevel2 from "./SubMenuLevel2";

interface NavItemOnPcProps {
  NavData: Array<NavBarItem>;
}

const cx = classNames.bind(styles);
const NavItemOnPc = ({ NavData }: NavItemOnPcProps) => {
  const [showSubMenu, setShowSubMenu] = useState<Array<boolean>>([]);

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  const subMenuOnMouseEnterHandler = (subMenuId: number) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId: number) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };
  return (
    <List className={cx("nav-list")}>
      {NavData.map((el: NavBarItem) => {
        if (!el.children) {
          return (
            <Box component={"li"} key={el.id}>
              <Link underline="none" href="#" className={cx("nav-link")}>
                <Typography variant={"caption"} className={cx("nav-title")}>
                  {el.name}
                </Typography>
              </Link>
            </Box>
          );
        }

        return (
          <Box
            key={el.id}
            component={"li"}
            onMouseEnter={() => subMenuOnMouseEnterHandler(el.id)}
            onMouseLeave={() => subMenuOnMouseLeaveHandler(el.id)}
            className={cx("nav-options options-hover")}
          >
            <Box className={cx("nav-div")}>
              <Typography variant={"caption"} className={cx("nav-title")}>
                {el.name}
              </Typography>
              <ArrowIcon className={cx("arrow-icon")} />
            </Box>

            <motion.ul
              variants={variants}
              animate={showSubMenu[el.id] ? "open" : "closed"}
              className={cx("nav-ul")}
            >
              {showSubMenu[el.id] &&
                el.children.map((ele) => {
                  if (!ele.children)
                    return <SubMenuLevel1 data={ele} key={ele.id} />;

                  return (
                    <Box
                      component={"li"}
                      onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                      onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                      key={ele.id}
                      className={cx("sub-menu-options sub-menu-hover")}
                    >
                      <Box className={cx("sub-menu-div")}>
                        <Typography variant={"caption"} className={cx("nav-title")}>
                          {ele.name}
                        </Typography>

                        <ArrowIcon />
                      </Box>

                      <SubMenuLevel2
                        data={ele}
                        showSubMenu={showSubMenu}
                        variants={variants}
                        key={ele.id}
                      />
                    </Box>
                  );
                })}
            </motion.ul>
          </Box>
        );
      })}
    </List>
  );
};

export default NavItemOnPc;
