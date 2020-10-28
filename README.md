# Interview Assignment: Account Management Frontend - Level 1

👋 Hi there!

In this coding assignment, your task is to build a Frontend app that integrates with the [Account Management API](api-specification.yml) to create and read account transactions.

See the instructions below to get the idea of how it should work.

## Instructions
Here's a mockup to get the idea of how the Frontend should look.

![Mockup](mockup.png)

This assignment includes a test suite. To make your Frontend app compatible with it please ensure the following (feel free to tweak the UI otherwise):

* There's a form with two input fields: Account ID and Amount. Whenever the form is submitted, a new transaction with the collected data should be created on the server. The HTML elements must have the following attributes:
  * Account ID input field: `data-type="account-id"`
  * Amount input field: `data-type="amount"`
  * Form: `data-type="transaction-form"`
* There's a list of the previously submitted transactions. Every newly submitted transaction should appear at the top of the list. The HTML element that represents a transaction should include the following HTML attributes: `data-type=transaction`, `data-account-id={transaction-account-id}`, `data-amount={transaction-amount}`, and `data-balance={current-account-balance}`

## What's included 🗂
We've added the [Account Management API](api-specification.yml) specification defined in the Open API format, a backend service that implements this API, and an automated Cypress test suite. 

Before running the tests, update the `baseUrl` (where your Frontend runs) in [cypress.json](cypress.json), and then run your app.

Run the tests:
```shell script
npm install # Install the required test dependencies
npm run test # Spin up the backend and run the tests
```
Or with yarn:
```shell script
yarn install # Install the required test dependencies
yarn run test # Spin up the backend and run the tests
```

## What we're looking for ⭐️
- **Integrate with a REST API**. Using the provided API spec, figure out the right service endpoints to use.
- **Implement client-side form data validation**. The API has restrictions on the allowed data format. Make sure to do the required checks client-side before sending the data to the server.
- **Organize your code with components**. Extract components that help you avoid duplication, but don't break things apart needlessly. We want to see that you can implement the UI with sound HTML semantics.
- **Document your choices**. Extend this README.md with info about how to run your application along with any hints that will help us review your submission and better understand the decisions you made.

## How to submit your solution 📬

1. Commit your changes to a new branch called `implementation`.
2. Create a Pull Request from `implementation`.

## What to expect next 👀
1. An engineer will do a code review of your Pull Request. They might ask questions that you'll need to answer, so please watch for GitHub notifications in your mailbox.
2. In the end, the engineer who did the code review will merge your Pull Request. That's when your assignment is over.

## FAQ ❓
- Q: What resources am I allowed to use?
  - A: This assignment simulates a real-world engineering task, so feel free to use any resources you'd typically use.
- Q: How much time should I spend?
  - A: Try not to spend more than 3 hours.
- Q: What if I get stuck?
  - A: Feel free to create a GitHub issue on this repository describing your problem.
  

---

Made by [DevSkills](https://devskills.co). 

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
