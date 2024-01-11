import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {useEffect,useState } from "react";
import axios from "axios"
export default function Feed() {
  const[posts,setPosts] = useState([]);
  
  useEffect(()=>{
    const fetchPosts= async()=>{
    const res =await axios.get("posts/timeline/6306d7351cd34a1d20ca3a3c");
    setPosts(res.data); 
  };
    fetchPosts();
  },[]);
  return (
    <div className="feed">
    <div className="feedWrapper">
      <Share/>
      {posts.map((p) => (
          <post key={p.id} post={p} />
        ))}
    </div>
    </div>
  )
}

