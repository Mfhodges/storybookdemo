import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Layout from "./components/Layout";
import Badge from "./components/Badge";
import Dropdown from "./components/Dropdown";

const dropdownValues = [
  { value: "dog", name: "Dog" },
  { value: "cat", name: "Cat" },
  { value: "hamster", name: "Hamster" },
  { value: "parrot", name: "Parrot" },
  { value: "spider", name: "Spider" },
  { value: "goldfish", name: "Goldfish" },
];

const App = () => {
  return (
    <>
      <Layout>
        <h2 className="my-5"> Badge</h2>
        <Badge text="hello" color="gray" onRemove={() => {}} />
        <h2 className="my-5">Dropdown</h2>
        <Dropdown label="Here's a Label" values={dropdownValues} />
      </Layout>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
