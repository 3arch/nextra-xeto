import React from "react";
import classes from "./splitcomponent.module.css";
interface Props {
  children?: any;
}

function SplitComponents(props: Props) {
  const { children } = props;

  let elements = [],
    cards = [];
  try {
    const chunkSize = 3;
    for (let i = 0; i < children.length; i += chunkSize) {
      const chunk = children.slice(i, i + chunkSize) as never;
      elements.push(chunk);
    }

    elements.map((ele: any) => {
      const heading = ele[0].props.children;
      const description = ele[1].props.children;
      const image = ele[2].props.children.props;
      const card = (
        <div className="flex items-center space-x-6 even:flex-row-reverse">
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
      ) as never;
      cards.push(card);
    });

    console.log(elements);
  } catch (err) {
    return "Please specify the proper format";
  }

  return <div className="space-y-4 ">{cards.map((x) => x)}</div>;
}

export default SplitComponents;
