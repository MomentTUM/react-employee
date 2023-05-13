import React, { useState } from "react";

const initialInput = {
  empID: "",
  firstNameTH: "",
  lastNameTH: "",
  firstNameEN: "",
  lastNameEN: "",
  nickName: "",
  departmentID: 0,
  positionID: 0,
  startDate: "",
  birthDate: "",
  email: "",
  telephone: "",
  statusID: 0,
  profilePath: "",
  timestamp: "",
};

export default function TestRegister() {
  const [input, setInput] = useState(initialInput);

  const handleChangInput = (e) => {
    setInput({...input,[e.target.name]:e.target.value})
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <input
        placeholder="empID"//
        type="text"
        name="empID"
        value={input.empID}
        onChange={handleChangInput}
      />
      <input
        placeholder="firstNameTH"//
        type="text"
        name="firstNameTH"
        value={input.firstNameTH}
        onChange={handleChangInput}
      />
      <input
        placeholder="lastNameTH"//
        type="text"
        name="lastNameTH"
        value={input.lastNameTH}
        onChange={handleChangInput}
      />
      <input
        placeholder="firstNameEN"//
        type="text"
        name="firstNameEN"
        value={input.firstNameEN}
        onChange={handleChangInput}
      />
      <input
        placeholder="lastNameEN"//
        type="text"
        name="lastNameEN"
        value={input.lastNameEN}
        onChange={handleChangInput}
      />
      <input
        placeholder="nickName"//
        type="text"
        name="nickName"
        value={input.nickName}
        onChange={handleChangInput}
      />
      <label>departmentID</label>
      <input
        placeholder="departmentID"//
        type="number"
        name="departmentID"
        value={input.departmentID}
        onChange={handleChangInput}
      />
      <label>positionID</label>
      <input
        placeholder="positionID"//
        type="number"
        name="positionID"
        value={input.positionID}
        onChange={handleChangInput}
      />
      <label>startDate</label>
      <input
        placeholder="startDate"//
        type="datetime-local"
        name="startDate"
        value={input.startDate}
        onChange={handleChangInput}
      />
      <label>birthDate</label>
      <input
        placeholder="birthDate"//
        type="datetime-local"
        name="birthDate"
        value={input.birthDate}
        onChange={handleChangInput}
      />
      <input
        placeholder="email"//
        type="text"
        name="email"
        value={input.email}
        onChange={handleChangInput}
      />
      <input
        placeholder="telephone"//
        type="number"
        name="telephone"
        value={input.telephone}
        onChange={handleChangInput}
      />
      <label>statusID</label>
      <input
        placeholder="statusID"//
        type="number"
        name="statusID"
        value={input.statusID}
        onChange={handleChangInput}
      />
      <input
        placeholder="profilePath"//
        type="text"
        name="profilePath"
        value={input.profilePath}
        onChange={handleChangInput}
      />
      <label>timestamp</label>
      <input
        placeholder="timestamp"//
        type="datetime-local"
        name="timestamp"
        value={input.timestamp}
        onChange={handleChangInput}
      />
      <button>Submit</button>
    </form>
  );
}
