<br />
<h1 align="center">Book Catalogue</h1>

A React application for browsing book categories, built with Redux Toolkit for state management and Vite for fast development and production builds.

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Security](#security)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)
- [Show Your Support](#show-your-support)
- [License](#license)

## About the Project

Book Catalogue is a single-page application that fetches and displays book categories using a Redux store. The project uses React for the UI layer and Redux Toolkit to manage asynchronous data fetching and category state.

### Built With

- [React 18](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Vite](https://vitejs.dev/)
- [Yarn](https://yarnpkg.com/)

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [Yarn](https://yarnpkg.com/getting-started/install) 1.x

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/FelipeEnne/book-catalogue.git
cd book-catalogue
yarn install
```

### Development

Start the development server with hot reload:

```bash
yarn start
```

The app will be available at `http://localhost:5173`.

### Production

Build and preview the production bundle:

```bash
yarn build
yarn preview
```

The optimized output is written to the `dist/` directory.

## Project Structure

```
book-catalogue/
├── index.html          # Vite entry HTML
├── vite.config.js      # Vite configuration
├── public/             # Static assets
└── src/
    ├── App.jsx         # Root component
    ├── App.css         # App styles
    ├── index.jsx       # React entry point
    └── reducers/
        ├── index.js    # Redux store (configureStore)
        └── bookscategories.js  # Categories reducer
```

## Security

Dependencies are kept up to date and audited regularly. After migrating from Create React App to Vite, the project reports **0 known vulnerabilities** via `yarn audit`.

To run a security audit locally:

```bash
yarn audit
```

## Authors

- Felipe Enne — felipeenne@gmail.com | [GitHub](https://github.com/FelipeEnne)

## Acknowledgements

- [Microverse](https://www.microverse.org/)
- [React](https://react.dev/)

## Show Your Support

Give a ⭐ if you like this project!

## License

This project is distributed under the Apache 2.0 License. A license file will be added to the repository.
