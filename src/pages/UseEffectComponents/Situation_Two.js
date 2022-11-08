import { useState, useEffect } from "react";
// Dùng cho những tác vụ chỉ dùng 1 lần VD: call API
// Call 2 lần vì TrictMode của react

export default function Situation_Two() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPost(posts));
  }, []);

  return (
    <div>
      <h2>Situation 2</h2>
      <div>Type on input to re-render component</div>
      <div>Open Console to view</div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {post.map((value) => {
          return <li key={value.id}>{value.title}</li>;
        })}
      </ul>
    </div>
  );
}
