# Fernando Galende + Sparta Commodities

[Link to project in GitHub](https://github.com/FernandoGalende/sparta-commodities)
[Link to deployed app in Vercel](https://sparta-commodities.vercel.app)

## Intro

This is a Single Page Application created with vite using a React Typescript template.

This is my vision of this code challenge. I put a lot of ❤️ on it.

## Getting started locally with pnpm

1. Ensure [Node.js](https://nodejs.org/) is installed.
1. Install [pnpm](https://pnpm.io/installation) globally: `$ npm install -g pnpm`
1. Clone the repository: `$ git clone https://github.com/FernandoGalende/sparta-commodities`
1. Install packages `$ pnpm install`
1. Start the development server: `$ pnpm dev` + open `http://127.0.0.1:5173`
1. Run tests: `$ pnpm test`
1. Open Cypress: `$ pnpm cypress:open`. The project should be running on PORT: `http://127.0.0.1:5173`

## My Approach

### Global state

I use `Context` as is the light way to handle global states on React

### Container/Presentational Pattern

I work with this pattern on the components because of the separations of concerns. Views has only layouts. Containers has logic.
[Explanation](https://www.patterns.dev/react/presentational-container-pattern/)

### Fixed versions

- Continuous integration stability
- Avoiding unintended updates

### Storage

I use local storage to keep the token.

- Global scope on all tabs
- Capacity
- Persistence until explicitly cleared

**_IMPORTANT:_** I am not keeping the todos on the storage since the challenge description don't said it.

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

### Styled Components

I have choose styled components because I am faster with it. I have no any inconvenience in work with scss. I think SC match very well with React and Typescript because of:

- Isolation
- Typescript
- Maintainability
- Reutilization
- Faster

### XStyled

It is a utility first css framework. It helps a lot with consistency in Design Systems and theming. [XStyled](https://xstyled.dev/)

### Ant-design

I pick this library in order to be faster. Also I think is clean and easy to use. [Ant Design](https://ant.design/)

## To improve

- Errors
- Accessibility
- Design
- Responsive
- Styles

## Made with love by:

[Fernando Galende](https://www.linkedin.com/in/fernandogalende/)
**Senior Frontend Engineer && Senior Designer**
