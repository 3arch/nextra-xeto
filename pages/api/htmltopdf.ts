import { NextApiRequest, NextApiResponse } from "next";
import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log();
  res.status(200).send(await getData(req.query.url || "https://example.com"));
}

const getData = async (url) => {
  try {
    const options = process.env.AWS_REGION
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        }
      : {
          args: [],
          executablePath:
            process.platform === "win32"
              ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
              : process.platform === "linux"
              ? "/usr/bin/google-chrome"
              : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        };
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.setViewport({ width: 2000, height: 1000 });
    await page.goto(url, { waitUntil: "networkidle0" });

    // const items = await page.$eval("main", (element) => {
    //   return element.innerHTML;
    // });
    // await page.setContent(items);
    // await page.emulateMediaType("screen");
    const pdf = await page.pdf({
      path: "button.pdf",
      margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
      printBackground: true,
      format: "A4",
    });
    return pdf;
  } catch (err) {
    console.log("ERR", err);
    return err;
  }
};