import { read } from "to-vfile";
import { unified } from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const file = await compile(
  //     await read("pages/whoFor/developers/grammar.mdx"),
  //     {
  //       remarkPlugins: [
  //         remarkFrontmatter,
  //         [remarkMdxFrontmatter, { name: "matter" }],
  //       ],
  //     }
  //   );

  const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, ["yaml", "toml"])
    .use(() => (tree) => {
      res.send(tree);
    })
    .process(await read("pages/whoFor/developers/grammar.mdx"));
}
