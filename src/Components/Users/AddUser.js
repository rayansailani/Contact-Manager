import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non empty values)!",
      });
      return;
    } else if (+enteredUserAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (>0)!",
      });
      return;
    } else {
      props.onSubmit({
        key: Math.random(),
        name: enteredName,
        age: enteredUserAge,
      });
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
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
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
