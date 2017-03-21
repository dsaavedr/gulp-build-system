import React from 'react';
import ReactDOM from 'react-dom';
import Test from './s2';

let x = {value: 1, log: 2};

({ value } = x);

var page = document.getElementByTagName('body');

ReactDOM.render(
  <Test/>
, page);
