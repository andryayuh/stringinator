# Stringinator

This repo is meant for you to thoroughly review the Underbar functions you've examined so far.

## What to do

### Rebuild Underbar

* re-implement the Underbar module,
* including its tests,
* then use Underbar to make another utility module called **Stringinator**.

### Build Stringinator

Stringinator is a small collection of string utilities.

Your job is to write the implementations of these utilities, making full use of the Underbar facilities.

## Running individual tests

Note that the `jest-cli` package was also installed into this repo, with the command:

```
npm install --save-dev jest-cli
```

This should allow you to use this syntax to just run one test file:

```
npm test countChars
```

That will do a partial match on the string and find the matching test and run it.

This can save you some time as you are writing the tests, as opposed to executing the entire test suite on every run.
