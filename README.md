# CBC Projects Index Page


[![Travis](https://img.shields.io/travis/compbiocore/projects-index-page.svg?style=flat-square)](https://travis-ci.org/compbiocore/projects-index-page)
[![License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](LINK)

## Overview
This repo houses a Node-Hugo project that generates Brown's Computational Biology Core's Projects Index Website located at: https://compbiocore.github.io.

To generate this webpage, we use Node.js to access GitHub's REST API and retrieve information about each of the Computational Biology Core's projects from their respective GitHub repositories. Project repository data is then processed and written to the `data/` folder on this repo, which is then processed by Hugo to generate a static web page providing information about various software, tutorials, and workshops offered by Brown's Computational Biology Core. The website is continuously updated and deployed to GitHub Pages using GitHub Actions. 

## Getting Started

Below will walk you through the steps performed by GitHub Actions to continuously update and deploy the Computational Biology Core's Projects Index Web Page. To get a better feel for the steps involved, feel free to download the repo (via git clone) and follow the steps below. 

### Prerequisites

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.org)
- [Hugo](https://gohugo.io)
- [Gulp](https://gulpjs.com)
- [GitHub Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)


### Step 1. Install
Install gulp and dependencies:
```
npm install -g gulp
npm install 
```

### Step 2. Set up `.env` file with GitHub Access Token
Sensitive environment variables are stored in the .env file. This file is included in .gitignore intentionally, so that it is never committed.
- Create a `.env` file and copy the contents of `.env.template` into it
- Add your GitHub username to the .env file 
- Get your [GitHub Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and add to the `.env` file (it is strongly recommended you use GitHub secrets to do this).

### Step 3. Update index.html
Get the data for updates using gulp: 
```bash
gulp sass data
hugo
```
The above step runs javascript code that updates the info.json file in the `data/` folder. This updated info.json file is then what is used by Hugo to generate an index.html file that GitHub Pages uses to generate the static web page. 

IMPORTANT NOTE: The javascript code used in this step fetches project repo data from from the compbiocore organizational repo and examines each project repo for a `docs/` folder and a `ready.yml` file summarizing the project; if the project repo has these componenets, then the project repo will be published to the website. If the repo does not have these components, it will be ignored. To publish your project, make sure it has these components! 

### Step 4. GitHub Actions Deployment
The site is deployed to GitHub Pages using GitHub Actions. The updated index.html file created in Step 3 along with the entire contents of the `public/` directory gets pushed to the master branch, which is the branch used as the publishing source for GitHub Pages. GitHub Actions is set up as a cron job and is scheduled to run once weekly. Note that if you are expecting a change to take place on the web page and you don't yet see it, make sure to refresh your browser. 

IMPORTANT NOTE: Any changes to the site should be done in the Hugo project (`hugo-site` branch). Never commit to `master`, as that branch will be updated by GitHub Actions whenever a new build is done and is the branch used for publishing the website. 
