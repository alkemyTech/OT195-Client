import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import SweetAlert from "sweetalert2-react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");

  const openAlert = () => {
    setShow(true);
  };

  const closeAlert = () => {
    setShow(false);
    setTitle("");
    setType("");
    setText("");
  };

  const showSuccessAlert = (title, text) => {
    setTitle(title);
    setType("success");
    setText(text);
    openAlert();
  };

  const showErrorAlert = (title, text) => {
    setTitle(title);
    setType("error");
    setText(text);
    openAlert();
  };

  const showInfoAlert = (title, text) => {
    setTitle(title);
    setType("info");
    setText(text);
    openAlert();
  };

  const value = {
    showSuccessAlert,
    showErrorAlert,
    showInfoAlert,
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
      {createPortal(
        <SweetAlert
          show={show}
          title={title}
          type={type}
          text={text}
          onConfirm={closeAlert}
          onEscapeKey={closeAlert}
          onOutsideClick={closeAlert}
        />,
        document.body
      )}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  return useContext(AlertContext);
};

export { AlertProvider, useAlert };
