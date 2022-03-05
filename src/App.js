import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import Nav from "./Nav";
import List from "./List";
import Data from "./Data";

export default function App() {
  const [list, setList] = useState(Data);

  const handleList = (name) => {
     if(name === "Add Location"){
      setList(Data);
      return;
    }
    const newItem = Data.filter((item) => item.city === name);
    setList(newItem);
    console.log(name);
  };

  return (
    <div className="App">
      <Nav handleList={handleList} />
      <List list={list} />
    </div>
  );
}
