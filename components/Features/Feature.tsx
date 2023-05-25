import React from "react";

interface Props {
  children?: any;
}

function Feature(props: Props) {
  const { children } = props;

  let heading,
    description,
    tagText,
    tagColor,
    restOfChildren: any[] = [];
  try {
    heading = children[0].props.children;
    description = children[1].props.children;
    const tag = children[2].props.children;

    tagText = tag.split(":")[0];
    tagColor = tag.split(":")[1];

    if (children.length > 3) {
      restOfChildren = children.slice(3);
    }
  } catch (err) {
    console.log(err);
    return "Please specify a proper format";
  }

  return (
    <div>
      <div className={"flex justify-between items-center"}>
        <h1 className=" text-2xl font-bold ">{heading}</h1>
        <span
          className={`border   py-1 px-1.5 text-xs rounded-lg tracking-tighter dark:border-white tagcolor-${tagColor}`}
        >
          {tagText}
        </span>
      </div>
      <p className="mt-3">{description}</p>

      {restOfChildren ? <div className="mt-4">{restOfChildren}</div> : null}
    </div>
  );
}

export default Feature;
