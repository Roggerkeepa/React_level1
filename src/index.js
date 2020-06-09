
import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Kipa"
const lname = "Sherpa"
const currDate = new Date().toDateString();
const currTime = new Date().toLocaleTimeString();
//dynamically bring date and current time by js
ReactDOM.render(
<>
<h1>{`Hellow, My name is ${fname} ${lname}`}</h1>
<p>Today Date = {currDate}</p>
<p>Current Time = {currTime}</p>
</>,
document.getElementById("root")
);