import { useState, useEffect } from "react";
///Callback sẽ được gọi lại mỗi khi dependency thay đổi
///ReactJS dùng toàn tử trict === để kiểm tra dependency có thay đổi không

export default function Situation_Three () {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [post, setPost] = useState([]);
  const [type, setType] = useState("posts");

  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPost(posts));
  }, [type]);

  return (
    <div>
      <h2>Situation 3</h2>

      {tabs.map((item) => {
        return (
          <button
            key={item}
            onClick={() => setType(item)}
            style={
              type === item ? { color: "#fff", backgroundColor: "#333" } : {}
            }
          >
            {item}
          </button>
        );
      })}

      <ul>
        {post.map((value) => {
          return <li key={value.id}>{value.title || value.name}</li>;
        })}
      </ul>
    </div>
  );
}
