import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ref, onValue, push, set } from "firebase/database";
import { projectFirestore } from "../components/firebase-config";
import Select from "react-select";

function Interface2() {
  const navigate = useNavigate();
  const FootRef = ref(projectFirestore, "sensor/FootType");
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [weight, setWeight] = useState();
  const handleClick = async (e) => {
    e.preventDefault();
    if (!name || !age || !gender || !weight) {
      alert("Please fill in all the fields.");
      return;
    }
    try {
      // Add a new foot to the Firestore collection
      const newFootRef = push(FootRef, {
        Name: name,
        Age: age,
        Gender: gender,
        Weight: weight,
      });
      const snapshot = await newFootRef; // Wait for the promise to resolve
      const newFootKey = snapshot.key; // Get the unique ID (key) generated by Firebase
      console.log(newFootKey);
      await set(ref(projectFirestore, `sensor/startStop`), {
        value: 1,
        sportId: newFootKey,
      });

      // Optionally, you can clear the form after submitting
      alert("Foot Mode Started Successfully!"); // Set the success message
      navigate("/interface6", {
        state: {
          sportId: newFootKey,
        },
      });

      // Optionally, you can clear the success message after a few seconds

      // Optionally, you can navigate to a different page or show a success message
    } catch (error) {
      // Handle the error (you can show an error message to the user)
      console.error("Error Starting data collection:", error.message);
    }
  };

  const GenderOptions = [
    { _id: "1", value: "Male", label: "Male" },
    { _id: "2", value: "Female", label: "Female" },
  ];

  return (
    <div className="maindiv">
      <Header />
      <div className="maindiv1">
        <div className="maindiv2">
          <div>
            <div className="maindiv4">
              <div className="maindiv6">
                <p className="font2">NAME</p>
                <input
                  className="input1"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log("weight:", name);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">AGE</p>
                <input
                  className="input1"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    console.log("weight:", name);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">WEIGTH</p>
                <input
                  className="input1"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">GENDER</p>
                <Select
                  className="input1"
                  options={GenderOptions}
                  type="text"
                  id="gender"
                  name="gender"
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      const gender = selectedOption.value;
                      setGender(gender);
                      console.log("Gender:", gender);
                    }
                  }}
                />
              </div>
            </div>
            <div className="maindiv5">
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

export default Interface2;
