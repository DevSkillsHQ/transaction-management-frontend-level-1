# Building and running the app in the pipeline

## Example 1

The app is located under `/app`. It builds with the `build_app` command and runs with the `run_app` command.

```json
{
  "build:fullstack": "cd app && build_app",
  "start:fullstack": "cd app && run_app"
}
```