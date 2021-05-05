# epochutils

> A simple utility functions to handle epoch timestamp.

[![NPM](https://img.shields.io/npm/v/epochutils.svg)](https://www.npmjs.com/package/mysql-utils-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i epochutils
```

## Usage

Sample code for performing single query

```jsx
const { epochUtil } = require('epochutils');


const currtime = epochUtil().getLocal();
const today = epochUtil().todayLocal();
const todayUTC = epochUtil().todayUTC();
const nextDay = epochUtils().addDay(1);
const lastMonth = epochUtils().subMonth(1);

```

## License

ISC © [hanjas](https://github.com/hanjas)