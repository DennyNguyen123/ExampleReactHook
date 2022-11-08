import { useState, useEffect } from "react";
///Callback sẽ được gọi lại mỗi khi dependency thay đổi
///ReactJS dùng toàn tử trict === để kiểm tra dependency có thay đổi không

export default function ListenDOM() {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [post, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPost(posts));
    return () => {
      console.log("Test");
    };
  }, [type]);
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    console.log("addEvent");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <h2>Listen DOM</h2>

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
      {console.log("render")}
      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go To Top
        </button>
      )}
    </div>
  );
}
