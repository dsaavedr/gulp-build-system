import React from 'react';
import ReactDOM from 'react-dom';
import Test from './s2';
//
let x = {value: 1, log: 2};
var value;
({ value } = x);

console.log(value);
//
var page = document.getElementById('app');

ReactDOM.render(
  <Test class="text-center" msg="Heading 1"/>
, page);

var salute = (name) => alert(name);
