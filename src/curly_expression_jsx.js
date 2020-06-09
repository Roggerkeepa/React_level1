
import React from 'react';
import ReactDOM from 'react-dom';
//js code to show inside react model and inside jsx by just using {}
const firstLastName = "Kipa Sherpa";
ReactDOM.render(
<React.Fragment>
<h1>Kipa Sherpa Netflix List</h1>
<p>Here are the top 5 Netflix series</p>
<ol>
   <li>The Kingdom</li>
   <li>Betal</li>
   <li>Patalok</li>
   <li>She</li>
   <li>Games Of Throne</li>
</ol>
<h2>My name is {firstLastName}</h2>
<h3>show expression like {3*3}</h3>
<h3>Just inside curly braces and write jsvaribale/function/expression {Math.random()}</h3>
</React.Fragment>
,document.getElementById('root')

);
//show expression like 3*3 just use that inside{}