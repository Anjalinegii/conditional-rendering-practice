import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.way === "Submit" ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      <button type="submit">{props.way}</button>
    </form>
  );
}

export default Form;
