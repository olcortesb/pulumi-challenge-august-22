# Pulumi challenge: Startup in a Box


I love IaC (Infrastructure as code) and Pulumi is one of my favorite tools. In this repo I document the [Pulumi challenge](https://www.pulumi.com/challenge/) to share my experience while participating in it.

## The challenge: 
In the official page of Pulumi is all informations about the challenge, text , video, example all resources... follow step by steep the tutorial


- Page of this challenge: [Link](https://www.pulumi.com/challenge/startup-in-a-box/?utm_source=LinkedIn&utm_medium=social&utm_campaign=FY2023Q1_Pulumi+Challenge&utm_content=linkedin-newsletter)
- Video tutorial for complete the challenge: [Link](https://youtu.be/NU7uOy273jQ)
- The prerequisites:
    - Pulumi Account: [Link](https://www.pulumi.com/docs/get-started/aws/begin/)
    - AWS Account: [Link](https://aws.amazon.com/es/free/?trk=09a4eec3-03b4-4415-9d0b-3c5df0dafd39&sc_channel=ps&s_kwcid=AL!4422!3!453309389698!b!!g!!%2Bamazon%20%2Baws&ef_id=Cj0KCQjw0oyYBhDGARIsAMZEuMsl-mDhZ9BJI6Mkog5xw8zxnj3B450Z4yXBpUVwdKo2axQmoPvP29oaAsyCEALw_wcB:G:s&s_kwcid=AL!4422!3!453309389698!b!!g!!%2Bamazon%20%2Baws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) 
    - Checkly Account: [Link](https://www.checklyhq.com/)


# Tips and Trick

### Update to latest version of Pulumi:
```bash
# for macOs
brew upgrade pulumi 
```

Verify the version

```bash
pulumi version                                       
v3.39.1
```
### Your Pulumi account

Verify you account and view the activity in the live web monitor of Pulumi

```bahs
pulumi whoami                                         
olcortesb
```

The link to live web monitor is in *`pulumi up`* or *`pulumi preview`* commands

```bash
pulumi up

Previewing update (dev)

View Live: https://app.pulumi.com/olcortesb/pulumi-challenge-august-22/dev/previews/...

```

### In ... Step 3. of tutorial , Working with Local Files

In the index.html , change the lines 

```html
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="normalize.css">
```
by 

```html
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./normalize.css">
```

for view the web in the browser locally with the css style, in the video tutorial this is explained.

## Disclaimer
I remove the pulumi-challenge-august-22/Pulumi.dev.yaml file for security.

I remove my data of code for last step of tutorial.

```javascrit
import { Swag } from "./swag-provider";

const swag = new Swag("olcortesb-pulumi", {
  name: "YOUR NAME",
  email: "YOUR EMAIL", 
  address: "YOUR ADDRESS",
  size: "SIZE",
});
```

## Conclusions

This is a great initiative of Pulumi for usage all power of IaC and Pulumi in real problems. 

Follow step by step the official tutorial of Pulumi and used this repo as reference if you ned