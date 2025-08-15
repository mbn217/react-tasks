

import "./container.css";
import Buttons from "../buttonComponent/buttons";

const buttons = [
  { postTitle: "Submit", postContent: "*****" },
  { postTitle: "Cancel", postContent: "&&&&&" },
  { postTitle: "Erase", postContent: "#####" },
  { postTitle: "Click Me", postContent: "!!!!!!!" },
];

const buttonComponents = buttons.map((button, index) => (
  <Buttons key={index} postTitle={button.postTitle}>
    <div className="post-content">{button.postContent}</div>
  </Buttons>
));

function Container() {
  return (
    <div className="tag-buttons-container">
      <div className="tag-buttons-grid">
        {buttonComponents}
      </div>
    </div>
  );
}

export default Container;

    