// Deploy Website to S3 with CloudFront
// Also shows the challenger how to build a ComponentResource
import { CdnWebsite } from "./cdn-website";

const website = new CdnWebsite("just-in-code", {});

export const url = website.url;

import * as checkly from "@checkly/pulumi";
import * as fs from "fs";

new checkly.Check("index-page", {
  activated: true,
  frequency: 10,
  type: "BROWSER",
  locations: ["us-east-1"],
  script: url.apply((url) =>
    fs
      .readFileSync("checkly-embed.js")
      .toString("utf8")
      .replace("{{websiteUrl}}", url)
  ),
});

import { Swag } from "./swag-provider";

const swag = new Swag("olcortesb-pulumi", {
  name: "YOUR NAME",
  email: "YOUR EMAIL", 
  address: "YOUR ADDRESS",
  size: "SIZE",
});
