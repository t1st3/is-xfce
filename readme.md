# is-xfce [![Build Status Travis](https://travis-ci.org/t1st3/is-xfce.svg?branch=master)](https://travis-ci.org/t1st3/is-xfce) [![Coverage Status](https://coveralls.io/repos/github/t1st3/is-xfce/badge.svg?branch=master)](https://coveralls.io/github/t1st3/is-xfce?branch=master)

> Check if the current session runs [XFCE desktop](https://www.xfce.org/).


## Install

```
$ npm install --save is-mate
```


## Usage

```js
const isXfce = require('is-xfce');

isXfce().then(data => {
  console.log(data);
  //=> true or false
});
```


## API

### isXfce()

Is a promise.


## License

MIT © [t1st3](http://tiste.org)
