import React from "react";
import classes from "./card.module.css";
interface Props {
  children?: any;
}

function Card(props: Props) {
  const { children } = props;

  let title: string,
    description: string,
    image: { src: { src: string } | string; alt: string },
    restOfChildren: any[] = [];

  try {
    title = children[0].props.children;
    description = children[1].props.children;
    image = children[2].props.children.props as {
      alt: string;
      src: string | { src: string };
    };
    console.log(image);
    if (children.length > 3) {
      restOfChildren = children.slice(3);
    }
  } catch (err) {
    return "Please Specify a proper structure";
  }

  return (
    <div className={ " nx-bg-primary-700/5 nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 p-4"}>
      <h3 className="flex items-center font-bold leading-6 mb-5 text-2xl">
        <img
          // @ts-ignore
          src={image.src.src || image.src}
          width="20"
          height="20"
          alt={image.alt}
          className="mr-3"
        />
        {title}
      </h3>

      <p className="text-base">{description}</p>
      {restOfChildren.length ? (
        <div className="mt-4">{restOfChildren}</div>
      ) : null}
    </div>
  );
}

export default Card;
