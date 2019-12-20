# Front-end Protfolio Boilerplate

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

### App structure

|-- src
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

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```text
Give an example
```

### Coding style tests

Explain what these tests test and why

```text
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

|   Name               |    Version    |         License        |    Description                                                                              |
|----------------------|:-------------:|:----------------------:|---------------------------------------------------------------------------------------------|
| react                |    16.12.0    |       MIT License      | [react](https://reactjs.org/docs/getting-started.html)                                      |
| react-dom            |    16.12.0    |       MIT License      | [react-dom](https://reactjs.org/docs/react-dom.html)                                        |
| react-scripts        |      3.2.0    |       MIT License      | Scripts and configuration used by [CRA](https://create-react-app.dev/docs/getting-started/) |
| react-router-dom     |      5.1.2    |       MIT License      | [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)           |
| typescript           |      3.7.2    |   Apache License 2.0   | [typescript](https://www.typescriptlang.org/)                                               |
| core-js              |      3.4.1    |       MIT License      | Modular standard library for JavaScript [core-js](https://github.com/zloirock/core-js)      |
| material-ui/core     |      4.6.1    |       MIT License      | [material-ui/core](https://material-ui.com/getting-started/installation/)                   |
| material-ui/icons    |      4.5.1    |       MIT License      | [material-ui/icons](https://material-ui.com/components/material-icons/)                     |
| jest                 |     24.9.0    |       MIT License      | Testing Framework [jest](https://jestjs.io/docs/en/getting-started.html)                    |
| enzyme               |     3.10.0    |       MIT License      | Testing utility for React [enzyme](https://airbnb.io/enzyme/docs/api/)                      |
| apollo/react-hooks   |      3.1.3    |       ???????????      |                                                                                             |
| apollo-boost         |      0.4.5    |       ???????????      |                                                                                             |
| apollo-cache-inmemory|      1.6.3    |       ???????????      |                                                                                             |
| apollo-client        |      2.6.4    |       ???????????      |                                                                                             |
| apollo-link          |     1.2.13    |       ???????????      |                                                                                             |
| apollo-link-error    |     1.1.12    |       ???????????      |                                                                                             |
| apollo-link-http     |     1.5.16    |       ???????????      |                                                                                             |
| graphql              |     14.5.8    |       ???????????      |                                                                                             |
| graphql-tag          |     2.10.1    |       ???????????      |                                                                                             |
| i18next-browser-lan..|      4.0.1    |       ???????????      |                                                                                             |
| i18next-xhr-backend  |      3.2.2    |       ???????????      |                                                                                             |
| react-i18next        |     11.2.2    |       ???????????      |                                                                                             |
| standard             |     14.3.1    |       ???????????      |  JavaScript Standard Style [standard](https://standardjs.com)                               |

## Contributing

Please read [CONTRIBUTING.md]("link") for details on our code of conduct, and the process for submitting pull requests to us.

## Convention

????

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Maximilian Garmatsch
** - *Initial work* - [Maximilian Garmatsch](https://github.com/MaximilianGarmatsch)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
