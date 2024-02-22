import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Interface3() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/interface4");
  };
  return (
    <div className="maindiv">
      <Header />
      <div className="maindiv1">
        <div className="maindiv2">
          <div>
            <div className="maindiv7">
              <div className="maindiv6">
                <p className="font2">NAME</p>
                <input className="input1"></input>
              </div>
              <div className="maindiv6">
                <p className="font2">SPORT</p>
                <input className="input1"></input>
              </div>
              <div className="maindiv6">
                <p className="font2">POSITION</p>
                <input className="input1"></input>
              </div>
              <div className="maindiv6">
                <p className="font2">AGE</p>
                <input className="input1"></input>
              </div>
              <div className="maindiv6">
                <p className="font2">WEIGHT</p>
                <input className="input1"></input>
              </div>
            </div>
            <div className="maindiv8">
              <button className="button1" onClick={handleClick}>
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface3;
