import React, { useState, useEffect } from 'react'; // useEffect - to be used when comp created
import axios from 'axios';
import CommentCreate from './CommentCreate';


export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  // call fetchPosts when PostList first rendered 
  useEffect(() => {
    fetchPosts();
  }, []); // empty array tells react to run the function just one time

  // for each post in the array of posts
  const renderedPosts = Object.values(posts).map(post => {
    return <div
      className="card"
      style={{ width: '30%', marginBottom: '20px' }}
      key={post.id}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentCreate postId={post.id} />
      </div>
    </div>
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between" >
    {renderedPosts}
  </div>;
};