import React from "react";
import Card from "../UI/Card";
import Styles from "./UsersList.module.css";
const UsersList = (props) => {
  const showList = props.users.length >= 0;

  return (
    <Card className={Styles.list}>
      <ul>
        {showList &&
          props.users.map((user) => {
            return (
              <li key={user.key}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age} </p>
              </li>
            );
          })}
      </ul>
    </Card>
  );
};
export default UsersList;
