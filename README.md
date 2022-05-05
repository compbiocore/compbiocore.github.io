# CBC Projects Index Page


[![Travis](https://img.shields.io/travis/compbiocore/projects-index-page.svg?style=flat-square)](https://travis-ci.org/compbiocore/projects-index-page)
[![License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](LINK)

## Overview
This repo houses a Node-Hugo project that generates Brown's Computational Biology Core's Projects Index Website located at: https://compbiocore.github.io.

To generate this webpage, we use Node.js to access GitHub's REST API and retrieve information about the Computational Biology Core's projects from their respective GitHub repositories. Project repository data is then processed and written to the `data/` folder on this repo, which is then processed by Hugo to generate a static web page providing information about various software, tutorials, and workshops offered by Brown's Computational Biology Core. 
The website is continuously updated and deployed to GitHub Pages using GitHub Actions. 

## Getting Started

Below will walk you through the steps performed by GitHub Actions to continuously update and deploy the Computational Biology Core's Projects Index Website page. To get a better feel for the steps involved, feel free to download the repo (via git clone) and follow the steps below. 

### Prerequisites

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.org)
- [Hugo](https://gohugo.io)
- [Gulp](https://gulpjs.com)
- [GitHub Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)


### 1. Install
Install gulp and dependencies:
```
npm install -g gulp
npm install 
```

### 2. Set up `.env` file with GitHub Access Token
Sensitive environment variables are stored in the .env file. This file is included in .gitignore intentionally, so that it is never committed.
- Create a `.env` file and copy the contents of `.env.template` into it
- Add your GitHub username to the .env file 
- Get your [GitHub Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and add to the `.env` file (it is strongly recommended you use GitHub secrets to do this).

### 3. Update index.html
Get the data for updates using gulp: 
```bash
gulp sass data
```
The above step runs javascript code that updates the index.html file located in the `public/` folder. This updated index.html file is then what is used by GitHub Pages to generate the static web page. 

NOTE: The javascript code used in this step fetches project repo data from from the compbiocore organizational repo and examines for a `docs/` folder and `ready.yml` file in the project repo; if the project repo has these componenets, then the project repo will be published to the website. If the repo does not have these components, it will be ignored. The updated javascript allows for collecting repo information from an organizational repo with up to 50 pages of data. 

### 3. GitHUB Actions Deployment
The site is deployed to GitHub Pages using GitHub Actions. The updated index.html file created in the previous step gets pushed to the master branch, which is the branch used as the publishing source for GitHub Pages. Note that any changes to the site should be done in the Hugo project (`hugo-site` branch). Never commit to `master`, as that branch will be updated by GitHub Actions whenever a new build is done and is the branch used for publishing the website.

### Appendix: Local Deployment
If you downloaded the repo and are following along locally, follow the above steps and then cd to the `public/` directory and start the server as follows: 
```bash
hugo 
```

The above will generate the web page at a localhost address. Copy and paste that address into your terminal to view. 
