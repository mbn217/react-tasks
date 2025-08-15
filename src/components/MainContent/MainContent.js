import React from 'react';
import PostCard from '../PostCard/PostCard';
import './MainContent.css';

const MainContent = () => {
  const posts = [
    {
      id: 1,
      number: "20",
      title: "Academy Excellence",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      id: 2,
      title: "hello world",
      content: "this is the hello world article"
    },
    {
      id: 3,
      title: "Post 3",
      content: "this is the body of post 3"
    }
  ];

  return (
    <main className="main-content">
      {posts.map(post => (
        <PostCard
          key={post.id}
          number={post.number}
          title={post.title}
          content={post.content}
        />
      ))}
    </main>
  );
};

export default MainContent;
