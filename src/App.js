import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent/header.jsx';
import Post from './components/postComponent/post.jsx';
import Buttons from './components/buttonComponent/buttons.jsx';
import Container from './components/container/container.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Post postTitle="Post Title 1" postContent="Post Content 1" />
      <Post postTitle="Post Title 2" postContent="Post Content 2" />
      <Post postTitle="Post Title 3" postContent="Post Content 3" />
      <Post postTitle="Post Title 4" postContent="Post Content 4" />
      <Post postTitle="Post Title 5" postContent="Post Content 5" />
      <Post postTitle="Post Title 6" postContent="Post Content 6" />
    </div>
  );
}

export default App;
