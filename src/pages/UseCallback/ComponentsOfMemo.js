import React from 'react';

const ComponentsOfMemo = ({num}) => {
    console.log("re-render");
    return (
        <div>
            Component re-render when father re-render
        </div>
    );
}

export default React.memo(ComponentsOfMemo);
