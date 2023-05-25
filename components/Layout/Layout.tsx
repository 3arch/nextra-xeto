import React from "react";

interface Props {
  children?: any;
  columnCount?: number;
}

function Layout(props: Props) {
  const { children, columnCount } = props;

  return (
    <>
      <div
        className={`grid grid-cols-1 lg:grid-cols-${columnCount} gap-10 my-5`}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;
