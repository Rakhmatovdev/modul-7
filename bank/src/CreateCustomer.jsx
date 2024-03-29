import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./userSlice";

function Customer() {
  const dispatch=useDispatch()
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  function handleClick() {
    var dt = new Date();
    dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate(); 
       const obj={
      fullName,
      nationalId,
      createAt:dt
    }
     dispatch(createUser(obj))
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
