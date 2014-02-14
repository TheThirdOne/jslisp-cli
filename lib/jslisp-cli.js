/*
 * jslisp-cli
 * https://github.com/TheThirdOne/jslisp-cli
 *
 * Copyright (c) 2014 Benjamin Landers
 * Licensed under the MIT license.
 */

var celeri = require('celeri');
var jslisp = require('jslisp');
function prompt(command){
  console.log(command);
  celeri.prompt('ijl> ', function(input)
  {
    prompt(input);
  });
}
prompt("Welcome to Interactive JSLisp");
celeri.open();
