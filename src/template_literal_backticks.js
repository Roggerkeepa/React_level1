
import React from 'react';
import ReactDOM from 'react-dom';

const fname ="kipa";
const sname = "Sherpa";

//simply use backtic `` template literals in jsx also $inside if there is jsx again

ReactDOM.render(
   <>
<h1>{`My first name is ${fname} and last name is ${sname}`}</h1>
<p> My lucky number is {5+5} </p>
</>,
document.getElementById("root")
);