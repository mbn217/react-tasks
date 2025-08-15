
import "./post.css";

function Post({ postTitle, postContent }) {
  return (
    <div className="post-card">
      <h2 className="post-title">{postTitle}</h2>
      <hr className="post-divider" />
      <p className="post-body">{postContent}</p>
    </div>
  );
}

export default Post;
