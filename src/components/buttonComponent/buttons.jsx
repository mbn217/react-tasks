import "./buttons.css";

function Buttons({ postTitle, postContent , children }) {
  return (
    <button className="tag-button">
      {postTitle}
      <div className="post-content">{postContent}</div>
      {children}
    </button>
  );
}

export default Buttons;
