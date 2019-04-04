import React from "react";

import Button from "./Button";

function Toolbar({ handleClick }) {
  return (
    <div className="Toolbar container">
      <Button classes="Btn Btn__all" handleClick={handleClick} title={"all"} />
      <Button classes="Btn Btn__fe" handleClick={handleClick} title={"fe"} />
      <Button classes="Btn Btn__js" handleClick={handleClick} title={"js"} />
      <Button
        classes="Btn Btn__react"
        handleClick={handleClick}
        title={"react"}
      />
      <Button
        classes="Btn Btn__redux"
        handleClick={handleClick}
        title={"redux"}
      />
    </div>
  );
}

export default Toolbar;
