# npm-extends 😈

## What?

This poisons the `require.cache` entry for npm’s `run-script` command with a
cooler version that runs a custom CLI of your choosing if the specified script
isn’t in `package.json`.

## Should I use this?

No.

## But how would I use it, in theory?

Install `npm-extends` in your project, then add an `.npmrc` file to your project
with this line:

```
onload-script="${PWD}/node_modules/npm-extends"
```

(Yes, unfortunately this will not work when you run `npm` from directories below
your `package.json`. You could probably make it work by installing `npm-extends`
globally.)

Add an `npm:extends` script to `scripts` in your `package.json` file that runs
the command you’d like to use instead of `npm run` when a script isn’t found.
It will be passed the script name and arguments.

```json
{
  "scripts": {
    "npm:extends": "your-cli",
    "boring-script": "echo This is boring!"
  }
}
```

Now you can run scripts that aren’t in there, but are supported by your tool!

```console
$ npm run cool-script

> your-cli "cool-script"

WaaAAaay cooler!
```
