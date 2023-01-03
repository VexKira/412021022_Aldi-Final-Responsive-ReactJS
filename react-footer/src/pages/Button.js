import { useState } from "react";

const Button = ({ limit, children }) => {
  const [isReadShown, setReadShown] = useState(false);
  const toogleBtn = () => {
    setReadShown((prevState) => !prevState);
  };
  return (
    <div className="Readmore">
      {isReadShown ? children : children.substr(0, limit)}
      <button className="text" onClick={toogleBtn}>
        {isReadShown ? "Show Less" : "...Read More"}
      </button>
    </div>
  );
};

export default Button;
