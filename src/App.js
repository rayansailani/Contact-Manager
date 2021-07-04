import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  console.log(userDetails);
  const userSubmitHandler = (user) => {
    setUserDetails((prevState) => {
      return [...prevState, user];
    });
  };
  return (
    <div>
      <AddUser onSubmit={userSubmitHandler} />
      <UsersList users={userDetails} />
    </div>
  );
}

export default App;
