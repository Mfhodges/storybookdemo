
import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import Badge from './components/Badge';

const App = () => {

return(<>
    <Badge text="hello" color="gray" onRemove={()=>{}} />
    </>)};

ReactDOM.render(<App />, document.querySelector("#root"))