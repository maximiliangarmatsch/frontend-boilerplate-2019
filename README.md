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

1. Modules: are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, and other code files whose scope is defined by the containing Module.
2. Components: controls a patch of screen called a view.
3. Services: are a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient. A component can delegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console. By defining such processing tasks in an injectable service class, you make those tasks available to any component. You can also make your app more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.
4. Interfaces: An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to. Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.

### App structure

|-- src
     |-- assets
       |--[+] fonts
       |--[+] icons
       |--[+] images
       |-- style
          |-- general
            |-- master-style.tsx
          |-- material-kit-react.js
     |-- intrerfaces
       |-- [+] shared
       |-- footer.intrerface.tsx
       |-- header.intrerface.tsx
     |-- components
       |-- info
           |-- [+] __test__
           |-- config.component.tsx
           |-- syle.component.tsx
           |-- info.component.tsx
     |-- modules
       |-- home
           |-- [+] __test__
           |-- config.module.tsx
           |-- syle.module.tsx
           |-- home.module.tsx
     |-- services
     |-- views
          |-- home.module.tsx
     |
     |-- [+] __test__
     |-- app.module.tsx
     |-- routes.tsx
     |-- index.js

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

|   Name            |    Version    |         License        |    Description                                                                              |
|-------------------|:-------------:|:----------------------:|---------------------------------------------------------------------------------------------|
| react             |    16.12.0    |       MIT License      | [react](https://reactjs.org/docs/getting-started.html)                                      |
| react-dom         |    16.12.0    |       MIT License      | [react-dom](https://reactjs.org/docs/react-dom.html)                                        |
| react-scripts     |      3.2.0    |       MIT License      | Scripts and configuration used by [CRA](https://create-react-app.dev/docs/getting-started/) |
| react-router-dom  |      5.1.2    |       MIT License      | [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)           |
| typescript        |      3.7.2    |   Apache License 2.0   | [typescript](https://www.typescriptlang.org/)                                               |
| core-js           |      3.4.1    |       MIT License      | Modular standard library for JavaScript [core-js](https://github.com/zloirock/core-js)      |
| material-ui/core  |      4.6.1    |       MIT License      | [material-ui/core](https://material-ui.com/getting-started/installation/)                   |
| material-ui/icons |      4.5.1    |       MIT License      | [material-ui/icons](https://material-ui.com/components/material-icons/)                     |
| jest              |     24.9.0    |       MIT License      | Testing Framework [jest](https://jestjs.io/docs/en/getting-started.html)                    |
| enzyme            |     3.10.0    |       MIT License      | Testing utility for React [enzyme](https://airbnb.io/enzyme/docs/api/)                      |

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
