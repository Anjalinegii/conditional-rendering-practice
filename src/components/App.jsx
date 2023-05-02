import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form way={"Login"} /> : <Form way={"Submit"} />}
    </div>
  );
}

export default App;
