import React from "react";
import { useAlert } from "../../contexts/alertContext";

const ExampleAlerts = () => {
  const { showSuccessAlert, showErrorAlert, showInfoAlert } = useAlert();

  return (
    <div>
      <button onClick={() => showSuccessAlert("Success Alert", "Success!")}>
        Success Alert
      </button>
      <button onClick={() => showErrorAlert("Error Alert", "Error!")}>
        Error Alert
      </button>
      <button onClick={() => showInfoAlert("Info Alert", "Info!")}>
        Info Alert
      </button>
    </div>
  );
};

export default ExampleAlerts;
