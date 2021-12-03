# Weather Application

You firstly need to install dependencies, using the following command:

```sh
    npm install
```

After that, to run the project in development mode, you need to type:

```sh
npm start
```

To run the tests in watch mode, you could just run the following command:

```sh
npm test
```

To build and use the project in another environment for production, use the following command:

```sh
npm build
```

This project was created using [Create React App(CRA)](https://github.com/facebook/create-react-app).

For unit testing, [React Testing Library(RTL)](https://github.com/testing-library/react-testing-library) is used. Considering that it is relatively new and seems quite promising, and RTL comes with CRA out of the box.

[Mock Service Worker(MSW)](https://mswjs.io/) is used to API mocking. It is again relatively new and popular project, and I haven't gotten any chance to try out, and thougt that this could be good opportunity.

State management is done with Redux using [Redux Toolkit(RTK)](https://redux-toolkit.js.org/). RTK comes with smart defaults and opiniated directions to reduce boilerplate codes and ease the complications of creating Redux Logic without the need of any extra package(thunk etc.)

For the styling solution, [styled-components](https://styled-components.com/) is used. It is quite handy to solve some specifity problems, to create dynamic styles and to setup a theme for some of the necessary design tokens.

Normalize.css and some other global styles to reset some browser defaults to tackle with browser default styles and reduce the inconsistencies a bit.

I select [axios](https://github.com/axios/axios) for my HTTP client choice. Its configuration a bit more practical than fetch and calling request function is a bit shorter comparing with fetch.

In order to solve the CORS problem during development within the package.json file proxy has been configured as the Weather API's url.

To deploy and use endpoint without CORS issue, I used cors-anywhere to proxify request, it might have several security implications but since this is sort of a demo application it can be disregarded.

In order to use the deployed application on Vercel, prior to opening application itself you need to go to https://cors-anywhere.herokuapp.com/corsdemo and click **Request temporary access to the demo server** button, and after that you can go to https://weather-application-blond.vercel.app/.
