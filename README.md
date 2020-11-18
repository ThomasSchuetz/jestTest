# jestTest

## Steps to get everything working:

* ``npm init -y`` to setup a new project
* ``npm i --save-dev jest babel-jest @babel/preset-env`` to install all required packages
* Create ``jest.config.js`` with the content shown below
* Create ``babel.config.json``with the content shown below

With this setup, we can create JavaScript files and test them in separate test files. To run the tests, use ``npm run test``


## ``jest.config.js``
``` javascript
module.exports = {
    verbose: true,
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    }
};
```

## ``babel.config.json``
```javascript
{
  "presets": ["@babel/preset-env"]
}
```
