# Interview Assignment: Account Management Frontend - Level 1

Hi there! 👋

In this interview assignment, you'll build a frontend that integrates with the following [Account Management API](api-specification.yml).

## UI

### Mockup
![Mockup](mockup.png)

The UI should consist of a single screen. 
The mockup above is to give you the idea of how it can look. Feel free to adjust the UI as long as the criteria below are covered.

On the left, there should be a list with previously submited transactions.
Newly submitted transactions should be appended at the top of the list.

On the right, there should be a form for submitting a new balance change.


## Predefined test suite ⚙️

In this repository, there is a predefined test suite that validates the minimum assignment criteria.

Run with:

```
npm install --save-dev puppeteer pptr-testing-library
npm install -g @devskills/account-management-api
account-management-api

#TODO run the tests.
```

## What you should focus on ⚠️

The goal of this assignment is to assess your knowledge in the following areas:

- Integrating with a REST API.
- Maintainable & well-tested code (Organize and test your code similar to how you'd do it in a real production codebase).
- Documentation (Make sure to outline the code structure, and any other technical decisions you would document in a real project).
- Handling state

## How you submit your solution 📬

1. Create a new branch called implementation and commit all your changes there.
2. Save an output file of a succesful test run for `{test_filename}` under ./out/.
3. Push your changes to the remote repository.
4. Create a Pull Request from `implementation` to `master`.

## What to expect next 👀
1. An engineer will do a code review of your Pull Request. They might ask questions that you'll need to answer, so please watch out for GitHub notifications in your mailbox.
2. In the end, the engineer who did the code review will merge your Pull Request. That's when your assignment is over.

## FAQ ❓
- Q: What resources am I allowed to use?
  - A: This assignment simulates a real-world engineering task, so feel free to use any resources you'd typically use.
- Q: How much time do I have?
  - A: Based on our data, 3 hours should be enough to complete this assignment for someone who's seen it for the first time. Anyway, we'd appreciate it if you submitted your implementation within 7-days since you received your invite.
- Q: What if I get stuck?
  - A: Feel free to create an issue on this repository describing your problem.
  
---

This assignment brought to you by [DevSkills](https://devskills.co).
