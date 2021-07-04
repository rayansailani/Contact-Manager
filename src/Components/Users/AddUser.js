import React, { useState } from "react";
import Card from "../UI/Card";
import Styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non empty values)!",
      });
      return;
    } else if (+enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (>0)!",
      });
      setEnteredAge("");
      return;
    } else {
      props.onSubmit({
        key: Math.random(),
        name: enteredUserName,
        age: enteredAge,
      });
      setEnteredAge("");
      setEnteredUserName("");
    }
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          removeError={errorHandler}
        />
      )}
      <Card className={Styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
