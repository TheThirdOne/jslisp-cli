#! /usr/bin/env node
/*
 * jslisp-cli
 * https://github.com/TheThirdOne/jslisp-cli
 *
 * Copyright (c) 2014 Benjamin Landers
 * Licensed under the MIT license.
 */
var optimist = require('optimist')
    .usage('$0 -[i] --file file')
    .describe('h', 'Display the usage')
    .describe('i', 'Interactive mode')
    .describe('v', 'Verbose mode')
    .describe('c', 'Compile mode')
    .describe('o', 'Output file')
    .alias('h', 'help')
    .alias('i', 'interactive')
    .alias('v', 'verbose')
    .alias('c', 'compile')
    .alias('o', 'output');
var argv = optimist.argv;
if (argv.help) {
    optimist.showHelp();
    process.exit(0);
}
var fs = require('fs');
if(argv.file){
  var JSLisp = require('jslisp');
  JSLisp.runtime.run(JSLisp.compiler.parse(fs.readFileSync(argv.file).toString()));
}else{
  argv.interactive = true;
}
if(argv.interactive){
  var ijl = require('./ijl.js');
}