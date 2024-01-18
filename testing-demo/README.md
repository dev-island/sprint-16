# Testing in react

## Setup
1. using Vitest -> A test runner like Jest
2. For rendering components in Node we need to simulate the DOM, so we use JSDom
3. to test our react components we'll use react-testing-library, which allows us to render, simulate events ect.
4. Since we're using typescript, we need to install vite [typescript paths](https://vitest.dev/guide/common-errors)
5. Finally, to fix the type error with globals ('describe', 'it', 'expect'), we need to install jest types

```
yarn add vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event vite-tsconfig-paths @types/jest --dev
```


## Snapshots

Snapshot tests are a very useful tool whenever you want to make sure the output of your functions does not change unexpectedly.

When using snapshot, Vitest will take a snapshot of the given value, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the result.



Visual Testing with storybook
