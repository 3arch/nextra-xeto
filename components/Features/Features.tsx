import React from "react";
interface Props {
  children?: any;
  columns: number;
}

function Features(props: Props) {
  const { children, columns } = props;
  const featureRef = React.useRef<HTMLDivElement>(null);

  let elements: any[] = [];
  let element: any[] = [];

  let cards = [];

  try {
    const chunkSize = 3;
    for (let i = 0; i < children.length; i += chunkSize) {
      const chunk = children.slice(i, i + chunkSize);
      elements.push(chunk);
    }

    let card: never;

    elements.map((ele) => {
      const heading = ele[0].props.children;
      const description = ele[1].props.children;
      const tag = ele[2].props.children;
      const tagText = tag.split(":")[0];
      const tagColor = tag.split(":")[1];

      card = (
        <div>
          <div className={"flex justify-between items-center"}>
            <h1 className=" text-2xl font-bold ">{heading}</h1>
            <span
              className={`border   py-1 px-1.5 text-xs rounded-lg tracking-tighter  tagcolor-${tagColor}`}
            >
              {tagText}
            </span>
          </div>
          <p className="mt-3">{description}</p>
        </div>
      ) as never;
      cards.push(card);
    });
  } catch (err) {
    return <h1>Please use a specific Structure</h1>;
  }

  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <div ref={featureRef} className={"space-y-3"}>
        {cards.map((card) => (
          <div className={""}>{card}</div>
        ))}
      </div>
    </>
  );
}

export default Features;
