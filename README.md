# Transaction Management Frontend - Level 1

Your task is to **build a frontend app** that:

1. Integrates with the provided Transaction Management API to create and show transaction/account data.
2. Makes the provided E2E tests pass.

Please agree with your hiring team regarding the tech stack choice.

Here's the mockup with hints:

![Transaction Management Frontend](https://user-images.githubusercontent.com/1162212/116607772-b11f2780-a932-11eb-8663-6c920533072c.png)

Feel free to tweak the UI, but please ensure that the following HTML is in place.

#### The form for submitting transactions

```html
<form data-type="transaction-form">
  <input data-type="account-id" ... />
  <input data-type="amount" ... />
</form>
```

Both input **fields should be cleared** after the form is submitted.

#### The transaction list

Every newly submitted transaction should go on **the top of the list** and should have an enclosing `<div />` with the following structure:

```html
<div 
     data-type="transaction"
     data-account-id="${transaction-account-id}"
     data-amount="${transaction-amount}"
     data-balance="${current-account-balance}" ...>
  ...
</div>
```

- `${transaction-account-id}` - account id of the corresponding transaction.
- `${transaction-amount}` - transaction amount.
- `${current-account-balance}` - the current account balance right after submitting the transaction (only needed to be initialized for the transactions submitted from the current client).

## Before you get started

#### Import boilerplate

Use [this link](https://docs.devskills.co/collections/85-the-interview-process/articles/342-importing-challenge-boilerplate) to get boilerplate code for your tech stack to configure a minimal setup for running the E2E tests.

<details>
<summary>Alternatevily, use the manual setup.</summary>

1. Update the `baseUrl` (where your app will run) in [cypress.json](cypress.json).
2. Update the [`build`](package.json#L5) and [`start`](package.json#L6) scripts in [package.json](package.json) to respectively build and start your app.

</details>

#### Get familiar with the API

<details>
<summary>Request examples</summary>

##### Get historical transactions

```
GET https://infra.devskills.app/api/transaction-management/transactions
```

##### Create a new transaction

```
POST https://infra.devskills.app/api/transaction-management/transaction
Content-Type: application/json

{
  "account_id": "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
  "amount": 7
}
```

##### Get a transaction by id

```
GET https://infra.devskills.app/api/transaction-management/transactions/7c94635a-40a3-4c87-888a-42c3ce5b9750
```

##### Get an account by id

```
GET https://infra.devskills.app/api/transaction-management/accounts/0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2
```

</details>

#### Try running the E2E tests locally

```bash
npm install
# Run your app here
npm run test
```

## What we expect from you

1. Make the provided E2E tests pass.
2. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
3. Create a new pull request, but please **do not merge it**.
4. Await further instructions from the hiring team.

## Need help?

Start with [Troubleshooting](https://www.notion.so/Troubleshooting-d18bdb5d2ac341bb82b21f0ba8fb9546), and in case it didn't help, create a new GitHub issue. We'll get back to you.

## Time estimate

**1-3 hours** depending on your experience level.

---

Made by [DevSkills](https://devskills.co). 

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
