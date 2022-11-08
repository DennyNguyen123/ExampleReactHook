import { useState, useEffect } from "react";

export default function FakeChatApp() {
  const Lession = [
    { id: 1, name: "Lession 1" },

    { id: 2, name: "Lession 2" },

    { id: 3, name: "Lession 3" },
  ];

  const [lessionId, setLessionId] = useState(1);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      // console.log(detail);f
      setComments((pre) => {
        if (!pre.includes(detail)) return [...pre, detail];
      });
    };
    window.addEventListener(`comment-${lessionId}`, handleComment);

    return () => {
      window.removeEventListener(`comment-${lessionId}`, handleComment);
      setComments([])
    };
  }, [lessionId]);
  return (
    <div>
      <h2>Fake chat app</h2>
      {/* {console.log(comments)} */}

      {Lession.map((value) => {
        return (
          <div
            key={value.id}
            style={{
              color: lessionId === value.id ? "red" : "#333",
            }}
            onClick={() => setLessionId(value.id)}
          >
            {value.id} - {value.name}
          </div>
        );
      })}
      <ul>
        {comments.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
