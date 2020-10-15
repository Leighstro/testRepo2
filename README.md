# testRepo2 with update
# Introduction

cucumber-cypress-gherkin tests for THEbenefitsHUB

 

# Getting Started

1.            Installation process

    - clone the repo

2.            Software dependencies

    - [Node.js](https://nodejs.org/en/)

 

# Build and Test

 

Use Cypress CLI commands.  Cypress CLI reference:

 

https://docs.cypress.io/guides/guides/command-line.html#How-to-run-commands

 

## Setting up config.env.json

 

After cloning repo, create a file named config.env.json in the root of the repo and add the following code to it, replacing variable values with the values you need in order to get tests to run in your env:

 

```

{

    "BrokerPassword": "",

    "BrokerUsername" : "",

    "Browser" : "chrome",

    "CompanyAdminUsername" : "",

    "CompanyAdminPassword" : "",

    "DriverPath": "",

    "PortalInstance" : "bravo",

    "SysadminPassword" : "",

    "SysadminUsername" : "" 

}

```

 

# Commands To Recreate Repo

 

These are merely educational/informational and are not required to actually run this project.

 

1. npm init

2. npm install cypress --save-dev

3. npm install cypress-cucumber-preprocessor --save-dev

4. npm install cosmiconfig

5. follow cypress-cucumber-preprocessor configuration instructions linked in resources below

 

# Updating Cypress node pacakages

 

Cypress actually caches some package info globably in AppData that can make updating a hairy process, throwing error messages when you try to run.

 

To avoid this, do not update Cypress from the UI and instead run this command:

 

> npx cypress install --force

 

https://github.com/cypress-io/cypress/issues/5440#issuecomment-547851042

 

# Resources

 

https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#installation

https://github.com/davidtheclark/cosmiconfig#installation
