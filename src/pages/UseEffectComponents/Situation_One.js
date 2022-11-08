import { useState, useEffect } from "react";
// Dùng mỗi khi component re-render
// Ít dùng

export default function Situation_One() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("Mounted");
  });

  return (
    <div>
      <h2>Situation 1</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <blockquote>Type on input to re-render component</blockquote>
      <blockquote>Open Console to view</blockquote>
      {console.log("Render")}
    </div>
  );
}
