import React from "react";
import Card from "./Card";
import Button from "./Button";
import Styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.removeError} className={Styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={Styles.modal}>
      <header className={Styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Styles.actions}>
        <Button onClick={props.removeError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop removeError={props.removeError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          removeError={props.removeError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
