import React, { useState } from "react";
import "./App.css";
//
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/NabBar/Navigation";
//
import 'bootstrap/dist/css/bootstrap.min.css';
import New from "./component/NewHalls/New";
import Home from "./component/Home/Home";
import Login from "./component/login/Login";

import AllHallsWithDiscount from "./component/Discount/Discount";

import Register from "./component/register/Register";

import AllHalls from "./component/allHalls/AllHalls";
function App() {

  const [num, setNum] = useState(1);
  const [allHalls,setALLHalls] = useState("")
  const [place,setPlace] = useState("")
  const [searchHall,setSearchHall] = useState("")

console.log(place);
  return (
    <>
    <Navigation setSearchHall={setSearchHall} setALLHalls={setALLHalls} setPlace={setPlace} setNum={setNum}   />
      <Routes>
        <Route path="/new" element={<New />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/discounts" element={<AllHallsWithDiscount num = {num} setNum={setNum} searchHall={searchHall} />} />
        <Route path="/login" element={<Login />} />
      
        <Route path="/all" element={<AllHalls num = {num} setNum={setNum} searchHall={searchHall} allHalls={allHalls} place={place} />} />
      </Routes>
    </>
  );
}

export default App;
