# Package name [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/pname/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/pname)

Get the name of the calling package.

[![NPM Badge](https://nodei.co/npm/pname.png)](https://npmjs.com/package/pname)

## Install

```sh
npm install pname
```

## Usage

```js
const packageName = require("pname");

console.log(packageName)
//=> 'somePackageName'
```

## API

### packageName

Type: `string`

The name of the calling package.
