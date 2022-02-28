# Notes

## WebStorm

- [Project settings](https://www.jetbrains.com/help/webstorm/configure-project-settings.html) documentation.
- Setup ESLint and Prettier:
  - `Preferences` > `Languages & Frameworks` > `JavaScript` > `Code Quality Tools` > `ESLint`:
    - Enable `Automatic ESLint configuration` + `Run eslint --fix on save`.
  - `Preferences` > `Languages & Frameworks` > `JavaScript` > `Prettier`:
    - Enable `On 'Reformat Code' action`.
    - Disable `On save`.
- [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig) plugin. [Properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties).

## Hooks

- Array API vs. Object API. Follow the Array API because it is more similar to the `useState()` hook and returns the same reference for all actions, thus avoiding unnecessary re-renders (they are memoized under the hood).
- Use [CodeSandbox](https://codesandbox.io/) (or similar) to test hooks.

## Package

- `npm install --save-peer react` and `npm install --save-dev react`.
- `npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import @joaopalmeiro/prettier-config @joaopalmeiro/eslint-config-react`.
- [react-hooks-testing-library](https://react-hooks-testing-library.com/).
- `npm install --save-dev @testing-library/react-hooks react-dom`.
- [Vitest](https://github.com/vitest-dev/vitest). [react-testing-lib](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib) example.
