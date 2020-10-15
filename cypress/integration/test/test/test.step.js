import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('user runs test', function () {
    cy.visit('https://www.google.com/')
})
