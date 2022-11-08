//import "./styles.css";
import { useState } from "react";
export default function Checkbox_TwoWayBinding() {
  const Courses = [
    {
      id: 1,
      name: "Example 1"
    },
    {
      id: 2,
      name: "Example 3"
    },
    {
      id: 3,
      name: "Example 3"
    },
    {
      id: 4,
      name: "Example 4"
    },
    {
      id: 5,
      name: "Example 5"
    }
  ];
  const [checked, setChecked] = useState([]);
  console.log(checked, "checked list");
  const handleCheck = (id) => {
    setChecked((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      else return [...prev, id];
    });
  };
  return (
    <div className="App">
      <h1>Check box</h1>
      {Courses.map((value, index) => {
        return (
          <div key={value.id}>
            <input
              type="checkbox"
              checked={checked.includes(value.id)}
              onChange={() => handleCheck(value.id)}
            />
            {value.name}
          </div>
        );
      })}
    </div>
  );
}
