import { NextApiRequest, NextApiResponse } from "next";
import remarkMdxChartJS from "remark-mdx-chartjs";
import { readFile } from "fs/promises";
import { compile } from "@mdx-js/mdx";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await compile(
    await readFile("../whoFor/developers/grammar.mdx"),
    {
      jsx: true,
      remarkPlugins: [remarkMdxChartJS],
    }
  );
  console.log(response);
}
