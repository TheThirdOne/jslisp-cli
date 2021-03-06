#! /usr/bin/env node
/*
 * jslisp-cli
 * https://github.com/TheThirdOne/jslisp-cli
 *
 * Copyright (c) 2014 Benjamin Landers
 * Licensed under the MIT license.
 */
var JSLisp = require('jslisp');

var readline = require('readline'),
temp = '',
rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('ijl> ');
rl.prompt();
rl.on('line', function(line) { //All the magic starts here
    loop(line);
}).on('close', function() {
    console.log('\nHave a great day!');
    process.exit(0);
});
function cont(){ //here if i need to edit later
    rl.prompt();
}
function loop(line){ //main loop
    try{
      console.log(JSLisp.runtime.run(JSLisp.compiler.parse(temp+line)));
      temp = '';
      rl.setPrompt('ijl> ');
    }catch(e){
      if(e === "Unexpected end of file. Expecting )"){
        rl.setPrompt(' ... ');
        temp += line + ' ';
      }else{
        rl.setPrompt('ijl> ');
        temp = '';
        console.log(e);
      }
    }
    cont();
}