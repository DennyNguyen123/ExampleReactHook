//import "./styles.css";
import { useState } from "react";
export default function Radio_TwoWayBinding() {
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
    }
  ];
  const [checked, setChecked] = useState(2);
  const handleSubmit = () => {};
  return (
    <div className="App">
      <h1>Radio</h1>
      {Courses.map((value, index) => {
        return (
          <div key={value.id}>
            <input
              type="radio"
              checked={checked === value.id}
              onChange={() => setChecked(value.id)}
            />
            {value.name}
          </div>
        );
      })}
    </div>
  );
}
