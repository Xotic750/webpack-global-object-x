<a
  href="https://travis-ci.org/Xotic750/webpack-global-object-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/webpack-global-object-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/webpack-global-object-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/webpack-global-object-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/webpack-global-object-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/webpack-global-object-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/webpack-global-object-x"
  title="npm version">
<img src="https://badge.fury.io/js/webpack-global-object-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/webpack-global-object-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/webpack-global-object-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/webpack-global-object-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/webpack-global-object-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

## webpack-global-object-x

For use with webpack globalObject.

**Example**

```js
var globalObject = require('webpack-global-object-x');
module.exports = {
  output: {
    globalObject: '(' + globalObject.toString() + '())',
    library: 'something',
    libraryTarget: 'umd'
  }
};
```
