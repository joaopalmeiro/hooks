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
- Packages:
  - [Mantine Hooks](https://github.com/mantinedev/mantine/tree/master/src/mantine-hooks).
  - [react-hanger](https://github.com/kitze/react-hanger).
  - [@chakra-ui/hooks](https://github.com/chakra-ui/chakra-ui/tree/main/packages/hooks).
  - [react-use](https://github.com/streamich/react-use).

## Package

- `npm install --save-peer react` and `npm install --save-dev react`.
- `npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import @joaopalmeiro/prettier-config @joaopalmeiro/eslint-config-react`.
- [react-hooks-testing-library](https://react-hooks-testing-library.com/).
- `npm install --save-dev @testing-library/react-hooks react-test-renderer`.
- [Vitest](https://github.com/vitest-dev/vitest). [react-testing-lib](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib) example.
- Jest:
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest).
  - [Setup without Create React App](https://jestjs.io/docs/tutorial-react#setup-without-create-react-app).
  - `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`.
  - `npm install --save-dev eslint-plugin-jest`.
  - [`test.each` or `it.each`](https://jestjs.io/docs/api#testeachtablename-fn-timeout): to parameterize tests like in pytest.
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library).
- [Mark the file as side-effect-free](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free).

## Misc

- [Image Grid](https://www.figma.com/community/plugin/824130560660439050/Image-Grid) Figma plugin.
- [Using Changesets with pnpm](https://pnpm.io/using-changesets).
- [Navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard).
- [Sucrase](https://github.com/alangpierce/sucrase): alternative to Babel.
- [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) and [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin).
- [lodash-es](https://www.npmjs.com/package/lodash-es) package.
- [Per Method Packages](https://lodash.com/per-method-packages).
- [polished](https://polished.js.org/) package.
- [Bundlephobia](https://bundlephobia.com/).
