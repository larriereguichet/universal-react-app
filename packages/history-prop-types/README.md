# history-prop-types

History `propTypes` help validate in React context (and for `propTypes` users in general) an history object
created via one of the `create*` method of the [`history`](https://github.com/ReactTraining/history/) package.

It asserts the history object has the *right* shape when wrapping an existing router (or creating a custom one).

## Install

`npm install --save history-prop-types`

## Usage

To validate a whole history object in a custom router:
```
import { history as historyPropTypes } from 'history-prop-types';

class MyCustomRouter extends Component {
  static propTypes = {
    ...
    history: PropTypes.shape(historyPropTypes),
    ...
  };
  ...
}
```

Or to validate a location object only:
`import { location as locationPropTypes } from 'history-prop-types';`

## About

This package will live if these `propTypes` never make it to the `history` package.
> See PR https://github.com/ReactTraining/history/pull/549 

## Licence

MIT