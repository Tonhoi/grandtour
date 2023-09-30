import { Link } from "@/components";
import { Box, Typography } from "@mui/material";

import classNames from "classnames/bind";
import styles from "./NavItem.module.scss";

const cx = classNames.bind(styles);

interface SubMenuLevel1Props {
  data: {
    name: string;
  };
}

const SubMenuLevel1 = (props: SubMenuLevel1Props) => {
  const { data } = props;

  return (
    <Box component={"li"} className={cx("sub-menu-li")}>
      <Link underline="none" href="#" className={cx("sub-menu-link")}>
        <Typography variant={"caption"}>{data.name}</Typography>
      </Link>
    </Box>
  );
};

export default SubMenuLevel1;
