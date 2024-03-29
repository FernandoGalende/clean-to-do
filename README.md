# Clean to do

[Link to deployed app in Vercel](https://clean-to-do.vercel.app)

## Intro

This is a Single Page Application created with vite using a React Typescript template.

## Instructions

This website is designed for registering our daily tasks, accessible through a straightforward login page. Upon visiting the site without being signed in, users must log in using a username/password and simulate a request; no actual network request is necessary. The simulated request consistently returns a valid token, with any string serving as a token. Once signed in, the login status should persist even if the user closes and reopens the webpage; ensuring this persistence is crucial and should be implemented optimally. After signing in, the website features a text label along with buttons for adding, updating, marking as done, and removing tasks. If the user logs out and then signs in again, no tasks will be displayed.

## Getting started locally with pnpm

1. Ensure [Node.js](https://nodejs.org/) is installed.
1. Install [pnpm](https://pnpm.io/installation) globally: `$ npm install -g pnpm`
1. Clone the repository: `$ git clone https://github.com/FernandoGalende/clean-to-do`
1. Install packages `$ pnpm install`
1. Start the development server: `$ pnpm dev` + open `http://127.0.0.1:5173`
1. Run tests: `$ pnpm test`
1. Open Cypress: `$ pnpm cypress:open`. The project should be running on PORT: `http://127.0.0.1:5173`

## My Approach

### Global state

I use `Context` as is the light way to handle global states on React.

### Container/Presentational Pattern

I have worked with this pattern on the components because of the separations of concerns. Views has only layouts. Containers has logic.
[Explanation](https://www.patterns.dev/react/presentational-container-pattern/)

### Fixed versions

- Continuous integration stability
- Avoiding unintended updates

### Storage

I use local storage to keep the token and the todos

- Global scope on all tabs
- Capacity
- Persistence until explicitly cleared

### Errors

I have added a generic error page which is rendered if any error happens.

## Architecture

```
shopping-cart
├── .github // ci/cd setup here
│   └── ...
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│
├── cypress
│   ├── e2e // e2e test cases here
│   └── ..
│
├── dist // bundle
│   └── ...
│
└── src
    ├── api // fake api here
    │   └── ...
    │
    ├── components // shared components
    │   └── ...
    │
    ├── views // pages on the app
    │   └── login
    │   └── todos
    │
    ├── context // global store
    │   └── auth
    │   └── todos
    │
    ├── declarations
    │
    ├── router
    │   └── routes
    │   └── paths
    │
    ├── storage // local storage
    │   └── ...
    │
    ├── styles
    │   └── components
    │   └── theme
    │   └── global
    │
    │
    ├── App.tsx
    └── main.tsx
```

## CI / CD

I have created a ci/cd for running this steps:

- Lint
- TS check
- Unit testing
- End2End testing
- Deploy to Vercel

## Technologies

### Typescript

I like TS because of:

- Compilation time errors
- Make development faster
- Easy to scale up
- More structured code
- Re-usable types
- Fast refactoring
- Less errors

### Vite

- Fast development server
- Tree shaking
- Hot Module Replacement
- Fast and optimized build

### Pnpm

- Faster
- Symlinks concept

### Vitest

- Performance
- Easy config

### React Testing Library - RTL

I am a RTL lover and Kent C. Dodds fan.
Unit testing is not negotiable to me.

- user centric
- Accessibility Testing

### Cypress

I used to cover the main use cases of the app.

- Real test cases
- CI / CD integration

### @xstyled/styled-components

I have choose styled components because I am faster with it. I have no any inconvenience in work with scss. I think SC match very well with React and Typescript because of:

- Isolation
- Typescript
- Maintainability
- Reutilization
- Faster

[XStyled](https://xstyled.dev/) is a utility first css framework. It helps a lot with consistency in Design Systems and theming.

### Ant-design

I pick this library in order to be faster. Also I think is clean and easy to use. [Ant Design](https://ant.design/).
I have picked ant because I am faster.

## To improve

- Errors
- Performance
- Accessibility
- Design
- Responsive
- Styles

[Fernando Galende](https://www.linkedin.com/in/fernandogalende/)
**Senior Frontend Engineer && Senior Designer**
