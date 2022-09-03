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

// import * as pulumi from "@pulumi/pulumi";
// import * as aws from "@pulumi/aws";
// import * as awsx from "@pulumi/awsx";
// import * as fs from "fs";
// import * as mime from "mime";
// const staticWebsiteDirectory = "website";

// const bucket = new aws.s3.BucketV2(
//     "bucketV2",
//     {
//       tags: {
//         Name: "pulumi-challenge-olcortesb",
//       },
//     }
//   );
  
// const bucketAcl = new aws.s3.BucketAclV2("bAcl", {
//     bucket: bucket.id,
//     acl: aws.s3.PublicReadAcl,
// });

// fs.readdirSync(staticWebsiteDirectory).forEach((file) => {
//     const filePath = `${staticWebsiteDirectory}/${file}`;
//     const fileContent = fs.readFileSync(filePath).toString();
  
//     new aws.s3.BucketObject(file, {
//       bucket: bucket.id,
//       source: new pulumi.asset.FileAsset(filePath),
//       contentType: mime.getType(filePath) || undefined,
//       acl: aws.s3.PublicReadAcl,
//     });
//   });

//   const s3OriginId = "myS3Origin";

//   const cloudfrontDistribution = new aws.cloudfront.Distribution(
//     "s3Distribution",
//     {
//       origins: [
//         {
//           domainName: bucket.bucketRegionalDomainName,
//           originId: s3OriginId,
//         },
//       ],
//       enabled: true,
//       isIpv6Enabled: true,
//       comment: "Some comment",
//       defaultRootObject: "index.html",
//       defaultCacheBehavior: {
//         allowedMethods: [
//           "DELETE",
//           "GET",
//           "HEAD",
//           "OPTIONS",
//           "PATCH",
//           "POST",
//           "PUT",
//         ],
//         cachedMethods: ["GET", "HEAD"],
//         targetOriginId: s3OriginId,
//         forwardedValues: {
//           queryString: false,
//           cookies: {
//             forward: "none",
//           },
//         },
//         viewerProtocolPolicy: "allow-all",
//         minTtl: 0,
//         defaultTtl: 3600,
//         maxTtl: 86400,
//       },
//       priceClass: "PriceClass_200",
//       restrictions: {
//         geoRestriction: {
//           restrictionType: "whitelist",
//           locations: ["US", "CA", "GB", "DE"],
//         },
//       },
//       viewerCertificate: {
//         cloudfrontDefaultCertificate: true,
//       },
//     }
//   );

//   export const url = cloudfrontDistribution.domainName