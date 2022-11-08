import React from "react";

const SubUseCallbackRender = ({ handlerender }) => {
  console.log("re-render");
  return (
    <div>
      <div>Component re-render when father re-render</div>
      <button onClick={handlerender}>Increase Render</button>
    </div>
  );
};

export default React.memo(SubUseCallbackRender);
