

import "./container.css";
import Buttons from "../buttonComponent/buttons";

function Container() {
  return (
    <div className="tag-buttons-container">
      <div className="tag-buttons-grid">
        <Buttons postTitle = "Submit">
            <div className="post-content">
                *****
            </div>
        </Buttons>
        <Buttons postTitle = "Cancel">
            <div className="post-content">
                &&&&&
            </div>
        </Buttons>
        <Buttons postTitle = "Erase">
            <div className="post-content">
                #####
            </div>
        </Buttons>
        <Buttons postTitle = "Click Me">
            <div className="post-content">
                !!!!!!
            </div>
        </Buttons>

      </div>
    </div>
  );
}

export default Container;

    