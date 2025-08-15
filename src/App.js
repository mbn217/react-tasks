import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent/header.jsx';
import Post from './components/postComponent/post.jsx';
import Buttons from './components/buttonComponent/buttons.jsx';
import Container from './components/container/container.jsx';

const post =[
  { postTitle: "Post Title 1", postContent: "Post Content 1" },
  { postTitle: "Post Title 2", postContent: "Post Content 2" },
  { postTitle: "Post Title 3", postContent: "Post Content 3" },
  { postTitle: "Post Title 4", postContent: "Post Content 4" },
  { postTitle: "Post Title 5", postContent: "Post Content 5" },
  { postTitle: "Post Title 6", postContent: "Post Content 6" },
];
const posts = post.map((p, index) => {
  return <Post key={index} postTitle={p.postTitle} postContent={p.postContent} />;
});

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      {posts}

    </div>
  );
}

export default App;
