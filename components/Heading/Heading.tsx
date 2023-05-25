import React from "react";
interface Props {
  children?: any;
}

function Heading(props: Props) {
  const { children } = props;
  let heading,
    description,
    restOfChildren: any[] = [];
  try {
    heading = children[0].props.children;
    description = children[1].props.children;

    if (children.length > 2) {
      restOfChildren = children.slice(2);
    }
  } catch (err) {
    return "Please specify the proper format";
  }

  return (
    <div className="text-center my-3">
      <h1 className="font-bold leading-6 mb-5 text-2xl">{heading}</h1>
      <p className="text-base text-[#989cad] dark:text-white">{description}</p>

      <div className="mt-4">{restOfChildren}</div>
    </div>
  );
}

export default Heading;
