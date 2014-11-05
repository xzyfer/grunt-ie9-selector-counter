/*
 * grunt-ie9-selector-counter
 * https://github.com/xzyfer/grunt-ie9-selector-counter
 *
 * Copyright (c) 2013 xzyfer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Internal lib.
  var counter = require('ie9-selector-counter');

  grunt.registerMultiTask('ie9_selector_counter', 'Validate CSS files with IE9 selector counter.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({}),
        success = 0, failure = 0;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      f.src.map(function(filepath) {
        // Run validation
        var count = counter.count(filepath);
        if(count > 4095) {
          grunt.log.error(filepath + ' has ' + (count - 4096) + ' too many selectors');
          failure++;
        } else {
          success++;
          grunt.verbose.ok(filepath + ' has ' + count + ' selectors');
        }
      });
    });

    grunt.log.ok(success + ' file' + (success === 1 ? '' : 's') + ' are error free.');
    return failure === 0;
  });

};
