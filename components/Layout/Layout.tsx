import React from "react";
import classes from "./layout.module.css";

interface Props {
  children?: any;
  columnCount?: number;
}

function Layout(props: Props) {
  let  { children, columnCount=1 } = props;
  let width = 100;

  if(columnCount  = 2){
    width  = width /columnCount;
  }

  

  return (
    <>
      <div
        className={classes.layout}
        style={columnCount ? {
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`
        } : {}}
      >
        {children?.map((child) => (
          <div className={classes.child} style={{width:  width+"%", padding:"0 10px"}}>
            {child}
          </div>
        ))}
      </div>
    </>
  );
}

export default Layout;
