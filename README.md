<a name="readme-top"></a>

# TEST

Job Application App, where you search job title and view their details.

## Getting started

### Prerequisites

- Install LTS version of [`Node.js`](https://nodejs.org/en/)
- Run `yarn install` in the root directory of the project
- Run `yarn start` in the root directory of the project

### Recommendations

- Install the latest version of [`vsCode`](https://code.visualstudio.com/)
- Open `vsCode` and install [workspace recommended extenstions](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

- [`TypeScript`](https://www.typescriptlang.org/) - strongly-typed JavaScript
- [`React`](https://reactjs.org/) - javascript library for building UI components
- [`Material UI`](https://mui.com/material-ui/getting-started/installation/) - react component library with support for web
- [`React Router DOM`](https://reactnavigation.org/) - react navigation library
- [`Zustand`](https://www.npmjs.com/package/zustand) - state management library
- [`EsLint`](https://eslint.org/) - code linter
- [`Prettier`](https://prettier.io/) - code style formatter

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development practices

### Traceability

For cleaner documentation, it is ideal to create a branch off of `main` from a GitHub issue to link the story being worked on to the code.
When the work on the branch is done then merge back to `main` (see below) with the link to the issue intact.

### Pull requests to `main` branch

Pull requests to `main` should be titled according to the [`conventional commits`](https://www.conventionalcommits.org/).
This will allow `Release Please` tool to automate versioning, CHANGELOG, and releases.
For this reason, pull requests to `main` will have a check to make sure that at least the title of pull requests complies
with `conventional commits`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
