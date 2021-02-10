# Account Management Frontend - Level 1

### The task 🧩

Your task is to build a frontend service that integrates with the [Account Management API](api-specification.yml) backend. This API defines a set of operations for creating and reading account transactions. You can use [editor.swagger.io](https://editor.swagger.io/) to visualize the spec.

### App mockup 🧱

![Mockup](mockup.png)

### App specification 📘
* There's a form with two input fields: Account ID and Amount. Whenever the form is submitted, a new transaction with the collected data should be created on the backend, and the corresponding input fields are cleared. The HTML elements must have the following HTML attributes:
  * Account ID input field: `data-type="account-id"`
  * Amount input field: `data-type="amount"`
  * Form: `data-type="transaction-form"`
* There's a list of the previously submitted transactions. Every newly submitted transaction should appear at the top of the list. The HTML element that represents a transaction should include the following HTML attributes: `data-type=transaction`, `data-account-id={transaction-account-id}`, `data-amount={transaction-amount}`, and `data-balance={current-account-balance}`

### What we expect from you ⏳

- **Commit your code to a new branch called `implementation`**.
- **Integrate with the REST API**. Using the provided API spec, figure out the right service endpoints to use.
- **Make the provided API tests pass**. We added a set of API tests that run every time you push to a remote branch other than `master`/`main`. See the instructions below covering how to run them locally.
- **Implement client-side form data validation**. The API has restrictions on the allowed data format. Make sure to do the required checks client-side before sending the data to the server.
- **Organize your code with components**. Extract components that help you avoid duplication, but don't break things apart needlessly. We want to see that you can implement the UI with sound HTML semantics.
- **Document your choices**. Extend this README.md with info about how to run your application along with any hints that will help us review your submission and better understand the decisions you made. Specifically, please describe your solution for re-sending failed transactions.

### Before you get started ⚠️

Configure your repository. You have 2 options:

#### Set up boilerplate:

1. [Complete a boilerplate import](https://docs.devskills.co/collections/85-the-interview-process/articles/342-importing-challenge-boilerplate).
2. Configure the predefined backend:
1. Run `npm install @devskills/account-management-api`.
2. Add the following scripts to [package.json](package.json):
   1. `"start:backend": "node_modules/.bin/account-management-api",`
   2. `"start:fullstack": "npm run start:backend & npm run start",`

#### Alternatively, use the manual setup:

1. Update the `apiUrl` (where your app will run) in [cypress.json](cypress.json).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app. **[See examples](https://www.notion.so/Frontend-c614dbc47cca407788a29c3130cc1523)**.

### Running the E2E tests locally ⚙️

* Run `npm install`.
* Spin up the backend on **port 8080** with `npm run start:backend` (repeat before each test run).
* Run your app.
* Run the tests with `npm run test`.

### When you're done ✅

1. Create a Pull Request from the `implementation` branch.
2. Answer the questions you get on your Pull Request.

**If you don't have enough time to finish**, push what you got and describe how you'd do the rest in a `.md` file.

### Need help? 🤯

Start with [Troubleshooting](https://www.notion.so/Troubleshooting-d18bdb5d2ac341bb82b21f0ba8fb9546), and in case it didn't help, create a new GitHub issue. A human will help you.

### Time estimate ⏳

About **3 hours**.

---

Made by [DevSkills](https://devskills.co).

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
