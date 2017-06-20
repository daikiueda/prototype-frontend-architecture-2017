# [WIP] Prototype Frontend Architecture

I would like to discover my current better Frontend Architecture.

## Using...

- [Immutable.js](https://facebook.github.io/immutable-js/)
  - `Record` as **Model Class**.
- [Redux](http://redux.js.org/)
  - [normalizr](https://github.com/paularmstrong/normalizr)
    - **`normalize`** in `reducer` and **`denormalize`** in `mapStateToProps`.
      `schema.Entity` is near the Model Class.
    - So, there is only one  reducer for all Entities.
  - [reselect](https://github.com/reactjs/reselect)
    - To reduce the number of denormalization processing.
  - Ducks pattern
    - reducer, { actions, selectors } and ACTIONS.
  - [Redux Form](http://redux-form.com/)
  - [PLANED] redux-saga?
- [React](https://facebook.github.io/react/)
  - [CSS Modules](https://github.com/css-modules/css-modules)
    - It is a good idea to keep a Component and a Style One-to-One.
    - So, I would like to do the same for standard elements (Button, Table, etc.).

**and more**

- webpack
  - webpack-dev-server
  - react-hot-loader
- React Storybook
- ESLint
- AVA (for reducer and actionCreator)
  - nyc

## Directory Structure

```
.
├── src
│   ├── some-service
│   │   ├── components
│   │   ├── containers
│   │   ├── domain
│   │   │   ├── models
│   │   │   └── transactions
│   │   └── store
│   │       ├── modules
│   │       │   ├── entities
│   │       │   └── ui
│   │       └── saga
│   └── commons
│       ├── components
│       │   ├── _global-import-styles
│       │   │   └── constants
│       │   │       └── _colors-border.scss
│       │   └── elements
│       │       ├── BaseElement.js
│       │       ├── Table.js
│       │       └── Table.scss
│       └── store
│           └── configureStore.js
└── test
    └── ava
        ├── some-service
        └── commons
```