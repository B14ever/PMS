import React from "react";
import { NavLink } from "react-router-dom";
import * as bootstrapIcon from "react-icons/bs";
function RegistorButton({ Message }) {
  return (
    <div className="Registor-New">
      <NavLink
        className={`${Message[2]} btn-New`}
        role="button"
        to={Message[1]}
      >
        {Message[0]}
      </NavLink>
    </div>
  );
}

export default RegistorButton;
