
import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import Badge from './components/Badge';

const App = () => {

return(<><h1> Hellow world</h1>
    <Badge text="hello" color="gray" onRemove={()=>{}} />
    </>)};

ReactDOM.render(<App />, document.querySelector("#root"))