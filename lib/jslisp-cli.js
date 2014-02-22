#! /usr/bin/env node
/*
 * jslisp-cli
 * https://github.com/TheThirdOne/jslisp-cli
 *
 * Copyright (c) 2014 Benjamin Landers
 * Licensed under the MIT license.
 */
var argv = require('optimist')
          .argv;
var fs = require('fs');
if(argv.file){
  var JSLisp = require('jslisp');
  JSLisp.runtime.run(JSLisp.compiler.parse(fs.readFileSync(argv.file).toString()));
}else{
  argv.i = true;
}
if(argv.i){
  var ijl = require('./ijl.js');
}