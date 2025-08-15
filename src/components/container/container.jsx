

import "./container.css";
import Buttons from "../buttonComponent/buttons";

function Container() {
  return (
    <div className="tag-buttons-container">
      <div className="tag-buttons-grid">
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
      </div>
    </div>
  );
}

export default Container;

    