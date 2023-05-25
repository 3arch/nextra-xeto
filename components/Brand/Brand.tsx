import React from "react";
import classes from "./brand.module.css";
interface Props {
  children?: any;
}

function Brand(props: Props) {
  const { children } = props;

  return <span className={classes.brand}>{children}</span>;
}

export default Brand;
