import React, { useState, useEffect } from 'react'; // useEffect - to be used when comp created
import axios from 'axios';


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

  console.log(posts);

  return <div />;
};