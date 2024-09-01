# Github Actions Tutorial

## Introduction
Github Actions is a CI/CD tool that allows you to automate your workflow. It is a powerful tool that can be used to build, test, package, release, and deploy your code. In this tutorial, we will learn how to create a Github Actions workflow.

## Prerequisites
- Github account
- Repository with code (you can use this repository)

## Steps
2. Create a new file in the `.github/workflows` directory
3. Define the workflow
4. Push the changes to the repository
5. Check the Actions tab in the repository

## Example Workflow
```yaml
name: Test Project

on:
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    container:
      image: node:20
    steps:
      - uses: actions/checkout@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
      - run: npm run build

```