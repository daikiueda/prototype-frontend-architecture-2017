# [WIP] Prototype Frontend Architecture

I would like to discover my current better Frontend Architecture.

## Using...

- React
- Redux
  - Ducks pattern
  - redux-saga
- Immutable.js

**and more**

- webpack2
  - react-dev-server
  - react-hot-loader
- React Storybook
- ESLint
- AVA (for reducer and actionCreator)
- nyc

## Directory Structure

```
.
├── dist
├── src
│   ├── TooMuchTodo
│   │   ├── components
│   │   │   └── stories
│   │   ├── containers
│   │   ├── domain
│   │   │   ├── models
│   │   │   └── transactions
│   │   └── store
│   │       ├── reducer
│   │       │   ├── entities
│   │       │   └── requests
│   │       └── saga
│   └── commons
│       ├── components
│       └── store
│           └── configureStore.js
└── test
    └── ava
        └── TooMuchTodo
            └── store
                ├── reducer
                └── saga
```