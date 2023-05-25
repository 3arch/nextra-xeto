import React from "react";
import * as classes from "./splitcomponent.module.css";
export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}
interface SliptComponentProps extends StyleProps {
  children?: any;
}

function SplitComponent(props: SliptComponentProps) {
  const { children, className, style } = props;

  let heading,
    image: {
      src: string;
      alt: string;
    },
    description;

  try {
    heading = children[0].props.children;
    description = children[1].props.children;
    image = children[2].props.children.props;
  } catch (err) {
    return "Please specify the proper format";
  }

  return (
    <div className="flex items-center space-x-6">
      <div className={classes.imageWrapper + " flex-1"}>
        {image ? (
          <img src={image.src} alt={image.alt} className="w-[80%]" />
        ) : null}
      </div>
      <div className="flex-1">
        <h1 className={classes.heading}>{heading}</h1>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

export default SplitComponent;
