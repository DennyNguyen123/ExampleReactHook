import React from "react";

const Usage = () => {
  return (
    <div>
      <h3>Dùng khi nào?</h3>
      <div>
        Dùng khi muốn dữ liệu thay đổi thì giao diện được tự động cập nhật
        (render theo dữ liệu)
      </div>
      <br/>
      <h3>Cách dùng?</h3>
      <pre>{`import { useState } from "react"; 
    function Component(){ 
       const [state,setState] = useState(initState)
} `}</pre>
      <h4>Trong đó :</h4>
      <ul>
        <li>
          state : Giá trị của state. Trong lần đầu thì giá trị ban đầu sẽ được
          gán bằng
        </li>
        <li>setState : Hàm dùng để gán lại giá trị của state </li>
        <li> initState : Giá trị mặc định ban đầu của state</li>
      </ul>

<h4>Lưu ý:</h4>
      <ul>
        <li>Component sẽ được render lại sau khi "setState" </li>
        <li>Initial state chỉ dùng lần đầu </li>
        <li>setState chỉ chạy 1 lần khi có nhiều setState {`=>`} dùng function là pararam cho setState(dùng cho trường hợp setState nhiều lần)</li>
        <li>Nếu Initial State là function thì Initial State = giá trị return của function (K nên dùng). Nếu cần dùng hãy đặt 1 call back vào trong Initial State {`=>`} performance </li>
        <li> setState là thay thế State bằng giá trị mới </li>
      </ul>
    </div>
  );
};

export default Usage;
