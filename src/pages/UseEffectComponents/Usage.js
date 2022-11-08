import React from "react";

const Usage = () => {
  return (
    <div>
      <div>Dùng khi nào?</div>
      <div>
        Dùng khi muốn dữ liệu thay đổi thì giao diện được tự động cập nhật
        (render theo dữ liệu)
      </div>
      <div>Cách dùng?</div>
      <div>
        {`import { useState } from "react"; 

 

function Component(){ 

const [state,setState] = useState(initState) 

} 
`}
      </div>
      <div>
        trong đó : state : Giá trị của state. Trong lần đầu thì giá trị ban đầu
        sẽ được gán bằng initState setState : Hàm dùng để gán lại giá trị của
        state initState : Giá trị mặc định ban đầu của state
      </div>
      <div>
        Lưu ý: Component sẽ được render lại sau khi "setState" Initial state chỉ
        dùng lần đầu setState chỉ chạy 1 lần khi có nhiều setState {`=>`} dùng
        function là pararam cho setState(dùng cho trường hợp setState nhiều lần)
        Nếu Initial State là function thì Initial State = giá trị return của
        function (K nên dùng). Nếu cần dùng hãy đặt 1 call back vào trong
        Initial State {`=>`} performance setState là thay thế State bằng giá trị mới
      </div>
    </div>
  );
};

export default Usage;
