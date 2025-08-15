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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
