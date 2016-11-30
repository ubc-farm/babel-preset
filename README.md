# @ubc-farm/babel-preset
Includes babel-presets 2017, 2016, and react, plus the external-helpers plugin.

## Usage
In package.json:
```
{
  "name": "@ubc-farm/my-package",
  "version": "1.0.0",
  "babel": {
    "presets": ["@ubc-farm/babel-preset"]
  }
}
```

In .babelrc:
```
{
  "plugins": ["@ubc-farm/babel-preset"]
}
```
