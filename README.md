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
- ESLint
- AVA (for reducer and actionCreator)
- nyc

## Directory Structure

```
.
├── dist
├── src
│   ├── commons
│   │   ├── components
│   │   └── store
│   │       └── configureStore.js
│   └── some-service
│       ├── containers
│       └── store
│           ├── reducer
│           └── sagas
└── test
    └── ava
        └── some-service
            └── store
                └── reducer
```