# grunt-ie9-selector-counter

> A simple grunt wrapper arount [xzyfer/ie9-selector-counter](http://github.com/xzyfer/ie9-selector-counter)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ie9-selector-counter --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ie9-selector-counter');
```

## The "ie9_selector_counter" task

### Overview
In your project's Gruntfile, add a section named `ie9_selector_counter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ie9_selector_counter: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

This task takes not options besides the typical `files` options.

### Usage Examples

#### Default Options


```js
grunt.initConfig({
  ie9_selector_counter: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
05.05.2013 - Initial release
