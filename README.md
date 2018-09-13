# CBC Projects Index Page


[![Travis](https://img.shields.io/travis/compbiocore/projects-index-page.svg?style=flat-square)](https://travis-ci.org/compbiocore/projects-index-page)
[![License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](LINK)

## Overview
Node-Hugo project that generates Brown's Computational Biology Core's Projects Index Website.
We use Node.js to access GitHub's REST API and retrieve information about CBC's projects' repositories. The data is processed and written to `data/` which can then be used by Hugo to generate static pages.
The website is continuously deployed to GitHub Pages using Travis CI.

## Getting Started

### Prerequisites

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.org)
- [Hugo](https://gohugo.io)
- [Gulp](https://gulpjs.com)
- [GitHub Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)


### Install
Install dependencies:
```
npm install
```

### Set up `.env` file with GitHub Access Token
Sensitive environment variables are stored in the .env file. This file is included in .gitignore intentionally, so that it is never committed.
- Create a `.env` file and copy into it the contents of `.env.template`
- Get your [GitHub Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and add to the `.env` file.
