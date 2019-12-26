# Front-end Portfolio Boilerplate

One Paragraph of project description goes here

## Getting Started

Just clone one of the master [branches](#branches):

```sh
 git clone -b master https://github.com/maximiliangarmatsch/frontend-boilerplate my-app
 cd my-app
```

You will probably want to remove git history and start a brand new repository:

```sh
 rm -rf .git
 git init
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the app

```sh
npm run start
```

It will start the development server with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000](http://localhost:3000) — Server

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.

### Ininitialization

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```text
Give the example
```

And repeat

```text
until finished
```

End with an example of getting some data out of the system or using it for a little demo

### Coding style

*Atoms* - are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.
*Molecules* - are collections of atoms that form relatively simple UI components.
*Organisms* - are relatively complex components that form discrete sections of an interface.
*Templates* - place components within a layout and demonstrate the design’s underlying content structure.
*Pages* - apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.

### App structure src/

src
     |-- [+] __test__
          |-- app.module.tsx
          |-- routes.tsx
          |-- index.js
     |-- api
          |-- mocks
          |-- mutations
          |-- queries
     |-- assets
          |--[+] fonts
          |--[+] icons
          |--[+] images
          |-- style
               |-- general
                    |-- master-style.tsx
               |-- material-kit-react.js
     |-- config
          |-- apollo.tsx
          |-- i18n.tsx
     |-- i18n
          |-- translation-en.tsx
     |-- intrefaces
          |-- [+] shared
          |-- footer.intrerface.tsx
          |-- header.intrerface.tsx
     |-- ui
          |-- atoms
          |-- molecules
               |-- info
                    |-- [+] __test__
                    |-- _info.config.tsx
                    |-- _info.syle.tsx
                    |-- _info.tsx
          |-- organisms
          |-- templates
          |-- pages
               |-- about.module.tsx
     |-- utils
          |-- error-boundary.tsx
          |-- local-provider.tsx

## Running the tests

```text
npm run test
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

|   Name               | Version |       License      |    Description                                                                                                     |
|----------------------|:-------:|:------------------:|--------------------------------------------------------------------------------------------------------------------|
| react                | 16.12.0 |     MIT License    | [react](https://reactjs.org/docs/getting-started.html)                                                             |
| react-dom            | 16.12.0 |     MIT License    | [react-dom](https://reactjs.org/docs/react-dom.html)                                                               |
| react-scripts        |   3.3.0 |     MIT License    | Scripts and configuration used by [CRA](https://create-react-app.dev/docs/getting-started/)                        |
| react-router-dom     |   5.1.2 |     MIT License    | [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)                                  |
| typescript           |   3.7.2 | Apache License 2.0 | [typescript](https://www.typescriptlang.org/)                                                                      |
| core-js              |   3.4.1 |     MIT License    | Modular standard library for JavaScript [core-js](https://github.com/zloirock/core-js)                             |
| material-ui/core     |   4.6.1 |     MIT License    | [material-ui/core](https://material-ui.com/getting-started/installation/)                                          |
| material-ui/icons    |   4.5.1 |     MIT License    | [material-ui/icons](https://material-ui.com/components/material-icons/)                                            |
| jest                 |  24.9.0 |     MIT License    | Testing Framework [jest](https://jestjs.io/docs/en/getting-started.html)                                           |
| enzyme               |  3.10.0 |     MIT License    | Testing utility for React [enzyme](https://airbnb.io/enzyme/docs/api/)                                             |
| apollo/react-hooks   |   3.1.3 |     MIT License    | [apollo/react-hooks](https://www.apollographql.com/docs/react/api/react-hooks/)                                    |
| apollo-boost         |   0.4.5 |     MIT License    | Easiest way to start with Apollo Client! [boost](https://www.npmjs.com/package/apollo-boost)                       |
| apollo-cache-inmemory|   1.6.3 |     MIT License    | Recommended cache implementation. [link](https://www.npmjs.com/package/apollo-cache-inmemory)                      |
| apollo-client        |   2.6.4 |     MIT License    | [apollo-client](https://www.apollographql.com/docs/react/)                                                         |
| apollo-link          |  1.2.13 |     MIT License    | [apollo-link](https://www.apollographql.com/docs/link/)                                                            |
| apollo-link-error    |  1.1.12 |     MIT License    | [apollo-link](https://www.apollographql.com/docs/link/)                                                            |
| apollo-link-http     |  1.5.16 |     MIT License    | [apollo-link](https://www.apollographql.com/docs/link/)                                                            |
| graphql              |  14.5.8 |     MIT License    | [graphql](https://graphql.org/code/#javascript)                                                                    |
| graphql-tag          |  2.10.1 |     MIT License    | Utilities for parsing GraphQL queries. [link](https://www.npmjs.com/package/graphql-tag)                           |
| i18next-browser-lan..|   4.0.1 |     MIT License    | Use to detect user language in the browser. [link](https://www.npmjs.com/package/i18next-browser-languagedetector) |
| i18next-xhr-backend  |   3.2.2 |     MIT License    | Load resources from a backend using the xhr API. [link](https://www.npmjs.com/package/i18next-xhr-backend)         |
| react-i18next        |  11.2.2 |     MIT License    | [react-i18next](https://react.i18next.com/)                                                                        |
| standard             |  14.3.1 |     MIT License    | JavaScript Standard Style [standard](https://standardjs.com)                                                       |
| dotenv               |   8.2.0 |    BSD-2-Clause    | zero-dependency module that loads environment variables from a .env file                                           |

## Contributing

Please read [CONTRIBUTING.md]("link") for details on our code of conduct, and the process for submitting pull requests to us.

## Convention

[Atomic Design](http://atomicdesign.bradfrost.com/) by Brad Frost - " Atomic design has nothing to do with web-specific subjects like CSS or JavaScript architecture ".

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Maximilian Garmatsch
** - *Initial work* - [Maximilian Garmatsch](https://github.com/MaximilianGarmatsch)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

## Offline

* How much can I store?

| Browser |           Limit          |
|---------|--------------------------|
| Chrome  | <6% of free space        |
| Firefox | <10% of free space       |
| Safari  | <50MB                    |
| IE10    | <250MB                   |
| Edge    | Dependent on volume size |

In Chrome and Opera, your storage is per origin (rather than per API). Both storage mechanisms will store data until the browser quota is reached. Apps can check how much quota they’re using with the Quota Management API. In Chrome, apps can use up to 6% of free disk space. In Firefox, apps can use up to 10% of free disk space but will prompt the user for further storage requests after 50MB data stored. In mobile Safari, apps can use up to 50MB max, whereas desktop Safari allows unlimited storage (and prompts after 5MB). IE10+ maxes out at 250MB and prompts the user at 10MB. PouchDB tracks IDB storage behavior.

* How can I tell how much storage space my app is using?

In Chrome, the Quota Management API lets you query for the size of storage space currently used and how much is available to the application. A newer Storage Quota Estimate API tries to make it even easier to discover how much quota an origin is using with support for Promises.
