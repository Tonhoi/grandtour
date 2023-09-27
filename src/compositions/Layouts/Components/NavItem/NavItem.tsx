import { useState } from "react";
import { Typography, Box, List } from "@mui/material";
import { motion } from "framer-motion";
import classNames from "classnames/bind";

import { ArrowIcon, Link } from "@/components";
import styles from "./NavItem.module.scss";

interface NavBarItemProps {
  NavData: any;
}

const cx = classNames.bind(styles);

const NavItem = ({ NavData }: NavBarItemProps) => {
  const [showSubMenu, setShowSubMenu] = useState([]);

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  const subMenuOnMouseEnterHandler = (subMenuId: string) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId: string) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };
  return (
    <List className={cx("header-nav-list")}>
      {NavData.map((el: any) => {
        if (!el.children) {
          return (
            <Box component={"li"} key={el.id}>
              <Link underline="none" href="#" className="header-nav-link">
                <Typography variant={"caption"} className={cx("title")}>
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
            onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
            onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
            className={cx("header-nav-options options-hover")}
          >
            <Box className={cx("header-nav-div")}>
              <Typography variant={"caption"} className={cx("title")}>
                {el.name}
              </Typography>
              <ArrowIcon className={cx("arrow-icon")} />
            </Box>

            <motion.ul
              variants={variants}
              animate={showSubMenu[el.id] ? "open" : "closed"}
              className={cx("header-nav-ul")}
            >
              {showSubMenu[el.id] &&
                el.children.map((ele) => {
                  if (!ele.children) {
                    return (
                      <Box
                        component={"li"}
                        key={ele.id}
                        className={cx("sub-menu-li")}
                      >
                        <Link
                          underline="none"
                          href="#"
                          className={cx("sub-menu-link")}
                        >
                          <Typography variant={"caption"}>
                            {ele.name}
                          </Typography>
                        </Link>
                      </Box>
                    );
                  }

                  return (
                    <Box
                      component={"li"}
                      onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                      onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                      key={ele.id}
                      className={cx("sub-menu-options sub-menu-hover")}
                    >
                      <Box className={cx("sub-menu-div")}>
                        <Typography variant={"caption"} className={cx("title")}>
                          {ele.name}
                        </Typography>

                        <ArrowIcon />
                      </Box>
                      <motion.ul
                        variants={variants}
                        animate={showSubMenu[ele.id] ? "open" : "closed"}
                        className={cx("sub-menu-ul")}
                      >
                        {showSubMenu[ele.id] &&
                          ele.children.map((elem: any) => {
                            return (
                              <Box
                                component={"li"}
                                key={elem.id}
                                className={cx("grand-child-link")}
                              >
                                <Link underline="none" href="#">
                                  <Typography
                                    variant={"caption"}
                                    className={cx("title")}
                                  >
                                    {elem.name}
                                  </Typography>
                                </Link>
                              </Box>
                            );
                          })}
                      </motion.ul>
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

export default NavItem;
