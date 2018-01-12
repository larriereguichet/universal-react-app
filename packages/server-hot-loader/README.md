# express-hot-reload

Hot reload decorator for express servers and such.

## Usage

index.js
```
import app from './server';
import hot from 'express-hot-reload';

hot(module)(app).listen(3000 => 'I am an express server and I can reload myself!');
```
